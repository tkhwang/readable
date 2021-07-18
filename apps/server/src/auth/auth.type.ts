import { registerEnumType } from '@nestjs/graphql';
import { User } from '@readable/users/entities/user.entity';

export enum AuthProviders {
  Google = 'Google',
  Facebook = 'Facebook',
  Github = 'Github',
}

registerEnumType(AuthProviders, {
  name: 'AuthProviders',
  description: 'Auth providers',
});

export interface RequestWithInjectedUser extends Request {
  user: User;
}
