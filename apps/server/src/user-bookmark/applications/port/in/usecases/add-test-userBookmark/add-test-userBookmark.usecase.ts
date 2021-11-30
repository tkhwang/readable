import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from '@readable/categories/infrastructures/typeorm/repositories/category.repository';
import { Usecase } from '@readable/common/applications/usecase';
import { CommonOutput } from '@readable/common/models/common.output';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { AddUserBookmarkWithAuthInput } from '@readable/user-bookmark/applications/port/in/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.input';
import { AddUserBookmarkWithAuthUsecase } from '@readable/user-bookmark/applications/port/in/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.repository';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { OPERATION_TEST_URLS } from './add-test-userBookmark.data';

@Injectable()
export class AddTestUserBookmarkUsecase implements Usecase<null, CommonOutput> {
  private allUsers: UserEntity[];
  private allUsersLength: number;
  private allCategoryTags: Tag[];
  private allCategoryTagsLength: number;

  constructor(
    private readonly addUserBookmarkWithAuthUsecase: AddUserBookmarkWithAuthUsecase,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository,
    @InjectRepository(CategoriesRepository) private readonly categoriesRepository: CategoriesRepository
  ) {}

  async execute() {
    for (const category in OPERATION_TEST_URLS) {
      const urls = OPERATION_TEST_URLS[category];
      const categoryEntity = await this.categoriesRepository.findOne({ category });

      const [allUsers, allCategoryTags] = await Promise.all([
        this.usersRepository.find(),
        this.tagsRepository.find({ categoryId: categoryEntity?.id }),
      ]);

      this.allUsers = allUsers;
      this.allUsersLength = allUsers.length;
      this.allCategoryTags = allCategoryTags;
      this.allCategoryTagsLength = allCategoryTags.length;

      for (const url of urls) {
        const user = this.getRandomUser();
        const tags = this.getRandomTags(this.getRandomTagsNumber());

        const addUserBookmarkWithAuthInput = new AddUserBookmarkWithAuthInput(
          url,
          'Readable',
          (tags ?? []).map(tag => tag.tag)
        );

        try {
          await this.addUserBookmark(addUserBookmarkWithAuthInput, user);
        } catch (error) {
          console.error(`[-] AddTestUserBookmarkUsecase failed: ${error}`);
        }
      }
    }

    return new CommonOutput(true);
  }

  private addUserBookmark(command: AddUserBookmarkWithAuthInput, requestUser: UserEntity) {
    return this.addUserBookmarkWithAuthUsecase.execute(command, requestUser as UserModel);
  }

  private getRandomTagsNumber() {
    return this.getRandomIndex(3);
  }

  private getRandomTags(howMany: number) {
    const indexes: number[] = [];

    while (indexes.length < howMany) {
      const index = this.getRandomIndex(this.allCategoryTagsLength);

      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }

    return indexes.map(index => this.allCategoryTags[index]);
  }

  private getRandomTag() {
    return this.allCategoryTags[this.getRandomIndex(this.allCategoryTagsLength)];
  }

  private getRandomUser() {
    return this.allUsers[this.getRandomIndex(this.allUsersLength)];
  }

  private getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }
}
