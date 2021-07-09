import { User } from '@readable/users/entities/user.entity';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class SocialSigninInput extends PickType(User, ['provider', 'providerId', 'name', 'email', 'avatarUrl']) {}
