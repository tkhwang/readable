import { InjectRepository } from '@nestjs/typeorm';
import { BookmarkEntity } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Usecase } from '@readable/common/usecase';
import { Repository } from 'typeorm';

export class GetBookmarksUsecase implements Usecase<any, any> {
  constructor(@InjectRepository(BookmarkEntity) private readonly bookmarkRepository: Repository<BookmarkEntity>) {}

  async execute() {
    return this.bookmarkRepository.find();
  }
}
