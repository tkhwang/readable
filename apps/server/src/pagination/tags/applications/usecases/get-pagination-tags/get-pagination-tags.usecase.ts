import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { PaginationService } from '@readable/pagination/pagination.service';
import { PaginationTagBRFOs, PaginationTags } from '@readable/pagination/tags/domain/models/paginationTags.model';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { GetPaginationTagsInput } from './get-pagination-tags.input';

export class GetPaginationTagsUsecase implements Usecase<GetPaginationTagsInput, PaginationTags | null> {
  constructor(
    private readonly paginationService: PaginationService,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository
  ) {}

  async execute(query: GetPaginationTagsInput, requestUser?: UserModel | UserEntity) {
    const filter = await this.paginationService.generateTagsFilter(query);

    return this.paginationService.generatePaginationFromQuery(
      query,
      filter,
      requestUser,
      (query, filter, requestUser) => {
        return this.tagsRepository.queryForPagination(query, filter, requestUser);
      }
    );
  }
}
