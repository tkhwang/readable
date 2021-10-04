import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { User } from '@readable/users/domain/models/user.model';
import { GetPopularTagsWithAuthInput } from './get-popular-tags-with-auth.input';

@Injectable()
export class GetPopularTagsWithAuthUsecase implements Usecase<GetPopularTagsWithAuthInput, any> {
  constructor(@InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository) {}

  async execute(query: GetPopularTagsWithAuthInput, requestUser: User) {
    const { howMany } = query;

    return this.tagsRepository.getPopularTags(howMany);
  }
}
