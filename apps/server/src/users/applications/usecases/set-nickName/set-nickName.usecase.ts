import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { UserNotFoundException } from '@readable/users/domain/errors/users.error';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { SetNickNameInput } from './set-nickName.input';

@Injectable()
export class SetNickNameUsecase implements Usecase<SetNickNameInput, UserEntity> {
  constructor(@InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository) {}

  async execute(command: SetNickNameInput, requestUser: UserModel) {
    const { nickName } = command;

    const user = await this.usersRepository.findOne({
      where: { id: requestUser.id },
      relations: ['tags'],
    });

    if (!user) throw new UserNotFoundException(requestUser.id);

    const updatedUser = {
      ...user,
      nickName,
    };

    return this.usersRepository.save(updatedUser);
  }
}
