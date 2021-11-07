import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SetNickNameInput {
  @Field()
  nickName: string;

  constructor(nickName: string) {
    this.nickName = nickName;
  }
}
