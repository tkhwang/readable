import { registerEnumType } from '@nestjs/graphql';
import { User } from '@readable/users/models/user.model';

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
