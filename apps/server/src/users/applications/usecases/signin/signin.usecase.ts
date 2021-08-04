import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { OAuthUsersRepository } from '@readable/users/infrastructures/typeorm/repositories/oauthUsers.repository';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { SigninInput } from './signin.input';

@Injectable()
export class SigninUsecase implements Usecase<SigninInput, string> {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(OAuthUsersRepository) private readonly oAuthUsersRepository: OAuthUsersRepository
  ) {}

  async execute(command: SigninInput) {
    console.log('TCL: SigninUsecase -> execute -> command', command);
    const { provider, providerId, email } = command;

    // MEMO(Teddy): OAuthUser by provider/providerId
    let oauthUser = await this.oAuthUsersRepository.findOne({ where: { provider, providerId } });
    if (!oauthUser) {
      oauthUser = await this.oAuthUsersRepository.create(command);
      await this.oAuthUsersRepository.save(oauthUser);
    }

    // MEMO(Teddy): User by email
    let user = await this.usersRepository.findOne({ where: { email } });

    if (user) {
      // Update user info by latest oauth user info
      if (oauthUser.name && oauthUser.name !== user.name) user.name = oauthUser.name;
      if (oauthUser.avatarUrl && oauthUser.avatarUrl !== user.avatarUrl) user.avatarUrl = oauthUser.avatarUrl;
      if (oauthUser.providerId && oauthUser.providerId !== user.providerId) user.providerId = oauthUser.providerId;
      await this.usersRepository.save(user);
    } else {
      const { id, ...restOAuthUser } = oauthUser;
      user = await this.usersRepository.create(restOAuthUser);
    }
    oauthUser.user = user;
    await this.usersRepository.save(user);
    await this.oAuthUsersRepository.save(oauthUser);

    const { id } = user;
    return this.jwtService.sign({ id, issuer: process.env.SERVER_HOST });
  }
}