import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { CommonOutput } from '@readable/common/models/common.output';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { chunk } from 'lodash';
import { OPERATION_TEST_USERS } from './create-test-users.data';

@Injectable()
export class CreateTestUsersUseCase implements Usecase<null, CommonOutput> {
  constructor(@InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository) {}

  async execute() {
    for (const chunkedUsers of chunk(OPERATION_TEST_USERS, 10)) {
      await Promise.all(chunkedUsers.map(user => this.usersRepository.save({ ...user, nickName: user.name })));
    }

    return new CommonOutput(true);
  }
}
