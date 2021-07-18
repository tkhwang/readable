import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoRepository } from '@readable/common/infrastructures/mongo/repositories';
import { Model } from 'mongoose';
import { Bookmark } from './infrastructures/mongo/bookmark.entity';

@Injectable()
export class BookmarksRepository extends MongoRepository<Bookmark> {
  constructor(
    @InjectModel(Bookmark.name)
    private readonly bookmarkModel: Model<Bookmark>
  ) {
    super(bookmarkModel);
  }
}
