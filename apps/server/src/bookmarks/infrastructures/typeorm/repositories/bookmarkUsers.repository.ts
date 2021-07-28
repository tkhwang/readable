import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { BookmarkUser } from '../entities/bookmarkUser.entity';

@Injectable()
@EntityRepository(BookmarkUser)
export class BookmarkUserssRepository extends Repository<BookmarkUser> {}
