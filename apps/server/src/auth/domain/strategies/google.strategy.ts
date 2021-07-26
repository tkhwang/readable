import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { SocialSigninInput } from '@readable/users/application/usecases/signin-or-create-user/signin-or-create-user.input';
import { AuthProviders } from '../auth.type';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_PW,
      callbackURL: process.env.OAUTH_GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const googleUser = new SocialSigninInput();
    googleUser.name = profile?.displayName ?? `${profile?.name?.givenName}${profile?.name?.familyName}`;
    googleUser.provider = AuthProviders.Google;
    googleUser.providerId = profile.id;
    googleUser.email = profile?.emails[0]?.value;
    googleUser.avatarUrl = profile?.photos[0]?.value;

    done(null, googleUser);
  }
}
