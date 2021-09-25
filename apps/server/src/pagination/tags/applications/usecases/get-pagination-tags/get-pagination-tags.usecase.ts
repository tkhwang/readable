import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationService } from '@readable/pagination/pagination.service';
import { PaginationTags } from '@readable/pagination/tags/domain/models/paginationTags.model';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { User } from '@readable/users/domain/models/user.model';
import { GetPaginationTagsInput } from './get-pagination-tags.input';

export class GetPaginationTagsUsecase implements Usecase<GetPaginationTagsInput, PaginationTags | null> {
  constructor(
    private readonly paginationService: PaginationService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async execute(query: GetPaginationTagsInput, requestUser: User) {
    const filter = await this.paginationService.generateTagsFilter(query);

    return this.paginationService.generatePaginationFromQuery(
      query,
      filter,
      requestUser,
      (query, filter, criteria, requestUser) => {
        return this.tagsRepository.queryForPagination(query, filter, criteria, requestUser);
      }
    );
  }
}
