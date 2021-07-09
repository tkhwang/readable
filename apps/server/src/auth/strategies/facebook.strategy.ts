import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';
import { SocialSigninInput } from '@readable/users/dto/create-user.input';
import { AuthProviders } from '@readable/auth/auth.type';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.OAUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.OAUTH_FACEBOOK_CLIENT_PW,
      callbackURL: process.env.OAUTH_FACEBOOK_CALLBACK_URL,
      scope: 'email',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, user: any, done: any): Promise<any> {
    const facebookUser = new SocialSigninInput();
    facebookUser.name = user?.displayName ?? user?.name;
    facebookUser.provider = AuthProviders.Facebook;
    facebookUser.providerId = user.id;
    facebookUser.email = user?.emails?.[0].value;
    facebookUser.avatarUrl = user?.photos?.[0]?.value ?? '';
    done(null, facebookUser);
  }
}
