import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/usecase';
import { User as UserModel } from '@readable/users/domain/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';

export class signinOrCreateUserUsercase implements Usecase<any, any> {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserEntity) private readonly usersRepository: UsersRepository
  ) {}

  async execute(command: UserModel) {
    const { provider, providerId } = command;
  }
}
