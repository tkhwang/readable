import { InputType, PickType } from '@nestjs/graphql';
import { User } from '@readable/users/domain/user.model';

@InputType()
export class SocialSigninInput extends PickType(User, ['provider', 'providerId', 'name', 'email', 'avatarUrl']) {}
