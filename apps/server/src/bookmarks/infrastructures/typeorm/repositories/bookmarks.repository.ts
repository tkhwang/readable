import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Bookmark } from '../entities/bookmark.entity';

@Injectable()
@EntityRepository(Bookmark)
export class BookmarksRepository extends Repository<Bookmark> {}
