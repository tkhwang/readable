import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class CoreModel {
  // TypeORM
  @Field(type => ID)
  public id: string;

  // Mongo
  // @Field(type => ObjectIdScalar)
  // public _id: ObjectId;

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;

  @Field(type => Date)
  public deletedAt: Date;
}
