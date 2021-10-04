import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async findManyUserBookmarksHavingUsers(howMany: number) {
    const queryBuilder = this.createQueryBuilder('user')
      .select('user.id', 'id')
      .addSelect('user.name', 'name')
      .addSelect('user.email', 'email')
      .addSelect('user.provider', 'provider')
      .addSelect('user.providerId', 'providerId')
      .addSelect('user.avatarUrl', 'avatarUrl')
      .addSelect(subQuery => {
        return subQuery
          .select('CAST(COUNT(*) AS UNSIGNED)', 'userBookmarksCount')
          .from('userBookmarks', 'userBookmarks')
          .where('userBookmarks.userId = user.id');
      }, 'userBookmarksCount')
      .innerJoinAndSelect('userBookmarks', 'userBookmarks', 'userBookmarks.userId = user.id')
      .limit(howMany)
      .orderBy('userBookmarksCount', 'DESC')
      .groupBy('user.id');

    const findManyUserBookmarksHavingUsers = await queryBuilder.getRawMany();

    console.log(
      'TCL: UsersRepository -> findManyUserBookmarksHavingUsers -> findManyUserBookmarksHavingUsers',
      findManyUserBookmarksHavingUsers
    );

    return findManyUserBookmarksHavingUsers;
  }
}
