import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@readable/common/repositories';
import { Model } from 'mongoose';
import { Bookmark } from './models/bookmark.entity';

@Injectable()
export class BookmarksRepository extends MongoRepository<Bookmark> {
  constructor(
    @InjectModel(Bookmark.name)
    private readonly bookmarkModel: Model<Bookmark>
  ) {
    super(bookmarkModel);
  }
}
