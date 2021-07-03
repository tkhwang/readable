import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: process.env.OAUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.OAUTH_FACEBOOK_CLIENT_PW,
      callbackURL: process.env.OAUTH_FACEBOOK_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'photos', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, user: any, done: any): Promise<any> {
    const { id, displayName, picture } = user;

    const facebookUser = {
      id,
      email: '',
      name: displayName,
      piacture: picture?.data?.url,
    };
    done(null, facebookUser);
  }
}
