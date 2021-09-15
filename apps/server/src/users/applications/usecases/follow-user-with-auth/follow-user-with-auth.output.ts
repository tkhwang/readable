import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';

@ObjectType()
export class FollowUserWithAuthOutputData {
  @Field(type => UserModel, { description: 'Following User' })
  followingUser: UserEntity;

  constructor(followingUser: UserEntity) {
    this.followingUser = followingUser;
  }
}

@ObjectType()
export class FollowUserWithAuthOutput {
  @Field(type => Boolean, { description: 'Common output' })
  isSuccess: boolean;

  @Field(type => FollowUserWithAuthOutputData, { description: 'Follow response data' })
  data: FollowUserWithAuthOutputData;

  constructor(isSuccess: boolean, data: FollowUserWithAuthOutputData) {
    this.isSuccess = isSuccess;
    this.data = data;
  }
}
