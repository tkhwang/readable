import { Field, ObjectType } from "@nestjs/graphql";
import { User as UserModel } from "@readable/users/domain/models/user.model";
import { User as UserEntity } from "@readable/users/infrastructures/typeorm/entities/user.entity";


@ObjectType()
export class RecommendUserOutput {
    @Field(type => [UserModel])
    users: UserEntity[]
}
