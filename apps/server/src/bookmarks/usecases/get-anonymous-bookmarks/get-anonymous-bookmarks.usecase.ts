import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/bookmark.entity';
import { Usecase } from '@readable/common/usecase';
import { Repository } from 'typeorm';

export class GetAnonymousBookmarksUsecase implements Usecase<void, Bookmark[] | null> {
  constructor(@InjectRepository(Bookmark) private readonly bookmarkRepository: Repository<Bookmark>) {}

  async execute() {
    return this.bookmarkRepository.find({ where: { user: null } });
  }
}
