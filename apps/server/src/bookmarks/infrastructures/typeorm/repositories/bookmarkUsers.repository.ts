import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { BookmarkUser } from '../entities/bookmarkUser.entity';

@Injectable()
@EntityRepository(BookmarkUser)
export class BookmarkUsersRepository extends Repository<BookmarkUser> {
  async findUserIdsByBookmarkId(bookmarkId: string) {
    // const data = await this.createQueryBuilder('bookmarkUser')
    //   // .innerJoin('user', 'user', 'user.id = bookmarkUser.userId')
    //   .where({ bookmarkId })
    //   .getMany();
    // console.log('TCL: BookmarkUsersRepository -> findCollectorsByBookmarkId -> data', data);
    // return data;

    return (await this.find({ where: { bookmarkId } })).map(bookmarkUser => bookmarkUser.userId);
  }
}
