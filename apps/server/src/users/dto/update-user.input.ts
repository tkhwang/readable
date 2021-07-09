import { SocialSigninInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(SocialSigninInput) {
  @Field(() => Int)
  id: number;
}
