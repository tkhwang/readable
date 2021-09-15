import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';

@ObjectType()
export class UnfollowUserWithAuthOutputData {
  @Field(type => UserModel, { description: 'Following User' })
  followingUser: UserEntity;

  constructor(followingUser: UserEntity) {
    this.followingUser = followingUser;
  }
}

@ObjectType()
export class UnfollowUserWithAuthOutput {
  @Field(type => Boolean, { description: 'Common output' })
  isSuccess: boolean;

  @Field(type => UnfollowUserWithAuthOutputData)
  data: UnfollowUserWithAuthOutputData;

  constructor(isSuccess: boolean, data: UnfollowUserWithAuthOutputData) {
    this.isSuccess = isSuccess;
    this.data = data;
  }
}
