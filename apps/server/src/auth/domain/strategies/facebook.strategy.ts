import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';
import { AuthProviders } from '../auth.type';
import { SigninInput } from '@readable/users/applications/usecases/signin/signin.input';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.OAUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.OAUTH_FACEBOOK_CLIENT_PW,
      callbackURL: process.env.OAUTH_FACEBOOK_CALLBACK_URL,
      scope: 'email',
      profileFields: ['id', 'displayName', 'photos', 'email', 'name'],
    });
  }

  // MEMO(Teddy): Facebook sometime doesn't provide email address. If so, use the generated email instead.
  async validate(accessToken: string, refreshToken: string, user: any, done: any): Promise<any> {
    const facebookUser = new SigninInput();
    facebookUser.name = user?.displayName ?? user?.name;
    facebookUser.provider = AuthProviders.Facebook;
    facebookUser.providerId = user.id;
    facebookUser.email = user?.emails?.[0].value ?? `${user.id}@readable.gen`;
    facebookUser.avatarUrl = user?.photos?.[0]?.value ?? '';

    done(null, facebookUser);
  }
}
