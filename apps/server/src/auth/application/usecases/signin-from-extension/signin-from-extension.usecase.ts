import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { User } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersService } from '@readable/users/users.service';
import { Repository } from 'typeorm';
import { SigninFromExtensionInput } from './signin-from-extension.input';

export class SigninFromExtensionUsecase implements Usecase<SigninFromExtensionInput, any> {
  constructor(
    private readonly usersService: UsersService // @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  async execute(command: SigninFromExtensionInput) {
    // const { provider, providerId, name, email, avatarUrl } = command;

    const token = await this.usersService.signinOrCreateUser(command);
    console.log('TCL: SigninFromExtensionUsecase -> execute -> token', token);

    return token;
  }
}
