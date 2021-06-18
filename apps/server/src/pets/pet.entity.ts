import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => String, { nullable: true })
  type?: string;
}
