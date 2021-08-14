import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { SigninInput } from '@readable/users/applications/usecases/signin/signin.input';
import { AuthProviders } from '../auth.type';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_PW,
      callbackURL: process.env.OAUTH_GOOGLE_CALLBACK_URL,
      scope: [
        'email',
        'profile',
        // 'https://www.googleapis.com/auth/calendar',
      ],
    });
  }

  // MEMO(Teddy): for getting refresh token
  // https://stackoverflow.com/a/64217203/2453632
  authorizationParams(): { [key: string]: string } {
    return { access_type: 'offline', prompt: 'consent' };
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const googleUser = new SigninInput();
    googleUser.name = profile?.displayName ?? `${profile?.name?.givenName}${profile?.name?.familyName}`;
    googleUser.provider = AuthProviders.Google;
    googleUser.providerId = profile.id;
    googleUser.email = profile?.emails[0]?.value;
    googleUser.avatarUrl = profile?.photos[0]?.value;
    googleUser.accessToken = accessToken;
    googleUser.refreshToken = refreshToken;

    done(null, googleUser);
  }
}
