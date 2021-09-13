import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UserBookmark } from '../entities/user-bookmark.entity';

@Injectable()
@EntityRepository(UserBookmark)
export class UserBookmarkRepository extends Repository<UserBookmark> {}
