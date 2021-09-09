import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '@readable/users/domain/models/user.model';
import { User as UserEntity } from '@readable/users/infrastructures/typeorm/entities/user.entity';

@ObjectType()
export class UnfollowUserWithAuthOutput {
  @Field(type => UserModel, { description: 'Follower User' })
  followerUser: UserEntity;

  @Field(type => UserModel, { description: 'Following User' })
  followingUser: UserEntity;

  constructor(followerUser: UserEntity, followingUser: UserEntity) {
    this.followerUser = followerUser;
    this.followingUser = followingUser;
  }
}
