import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usecase } from '@readable/common/applications/usecase';
import { CommonOutput } from '@readable/common/models/common.output';
import { Tag } from '@readable/tags/infrastructures/typeorm/entities/tags.entity';
import { TagsRepository } from '@readable/tags/infrastructures/typeorm/repositories/tags.repository';
import { AddUserBookmarkWithAuthInput } from '@readable/user-bookmark/applications/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.input';
import { AddUserBookmarkWithAuthUsecase } from '@readable/user-bookmark/applications/usecases/add-user-bookmark-with-auth/add-user-bookmark-with-auth.usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from '@readable/users/infrastructures/typeorm/repositories/users.repository';
import { OPERATION_TEST_URLS } from './add-test-userBookmark.data';

@Injectable()
export class AddTestUserBookmarkUsecase implements Usecase<null, CommonOutput> {
  private allUsers: UserEntity[];
  private allTags: Tag[];
  private allUsersLength: number;
  private allTagsLength: number;

  constructor(
    private readonly addUserBookmarkWithAuthUsecase: AddUserBookmarkWithAuthUsecase,
    @InjectRepository(TagsRepository) private readonly tagsRepository: TagsRepository,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    @InjectRepository(UserBookmarkRepository) private readonly userBookmarkRepository: UserBookmarkRepository
  ) {}

  async execute() {
    const [allUsers, allTags] = await Promise.all([this.usersRepository.find(), this.tagsRepository.find()]);

    this.allUsers = allUsers;
    this.allTags = allTags;
    this.allUsersLength = allUsers.length;
    this.allTagsLength = allTags.length;

    try {
      for (const url of OPERATION_TEST_URLS) {
        const user = this.getRandomUser();
        const tags = this.getRandomTags(this.getRandomTagsNumber());

        const addUserBookmarkWithAuthInput = new AddUserBookmarkWithAuthInput(
          url.url,
          'Readable',
          tags.map(tag => tag.tag)
        );

        await this.addUserBookmark(addUserBookmarkWithAuthInput, user);
      }

      return new CommonOutput(true);
    } catch (error) {
      return new CommonOutput(false, error.message);
    }
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
      const index = this.getRandomIndex(this.allTagsLength);

      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }

    return indexes.map(index => this.allTags[index]);
  }

  private getRandomTag() {
    return this.allTags[this.getRandomIndex(this.allTagsLength)];
  }

  private getRandomUser() {
    return this.allUsers[this.getRandomIndex(this.allUsersLength)];
  }

  private getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }
}
