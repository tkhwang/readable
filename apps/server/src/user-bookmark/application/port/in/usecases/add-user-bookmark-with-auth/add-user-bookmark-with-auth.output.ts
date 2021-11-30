import { Field, ObjectType } from '@nestjs/graphql';
import { UserBookmark as UserBookmarkEntity } from '@readable/user-bookmark/adapter/out/persistence/user-bookmark.entity';
import { UserBookmark as UserBookmarkModel } from '@readable/user-bookmark/domain/model/user-bookmark.model';

@ObjectType()
export class AddUserBookmarkWithAuthOutputData {
  @Field(type => UserBookmarkModel)
  userBookmark: UserBookmarkEntity;

  @Field(type => [UserBookmarkModel])
  recommendations: UserBookmarkEntity[];

  constructor(userBookmark: UserBookmarkEntity, recommendations: UserBookmarkEntity[]) {
    this.userBookmark = userBookmark;
    this.recommendations = recommendations;
  }
}

@ObjectType()
export class AddUserBookmarkWithAuthOutput {
  @Field(type => Boolean, { description: 'Commont output' })
  isSuccess: boolean;

  @Field(type => AddUserBookmarkWithAuthOutputData, { description: 'Add userBookmark output data' })
  data: AddUserBookmarkWithAuthOutputData;

  constructor(isSuccess: boolean, data: AddUserBookmarkWithAuthOutputData) {
    this.isSuccess = isSuccess;
    this.data = data;
  }
}
