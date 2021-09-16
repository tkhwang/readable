import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteUserBookmarkWithAuthInput {
  @Field(type => String)
  userBookmarkId: string;
}
