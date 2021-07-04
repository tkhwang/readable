import { registerEnumType } from '@nestjs/graphql';

export enum AuthProviders {
  Google = 'Google',
  Facebook = 'Facebook',
  Github = 'Github',
}

registerEnumType(AuthProviders, {
  name: 'AuthProviders',
  description: 'Auth providers',
});
