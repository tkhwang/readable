import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';
import { UrlInfoRepository } from '@readable/url-info/infrastructures/typeorm/repositories/url-info.repository';
import { User } from '@readable/users/domain/models/user.model';
import { UserBookmarkRepository } from './infrastructures/typeorm/repositories/user-bookmark.repository';

@Injectable()
export class UserBookmarkService {
  constructor(
    @InjectRepository(UrlInfoRepository) private readonly urlInfoRepository: UrlInfoRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(InterestsRepository) private readonly interestsRepository: InterestsRepository,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async upsertUserBookmark(urlHash: string, urlInfo: UrlInfo, user: User) {}
}
