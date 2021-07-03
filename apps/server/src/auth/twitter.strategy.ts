import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-twitter';
import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      consumerKey: process.env.OAUTH_TWITTER_CLIENT_ID,
      consumerSecret: process.env.OAUTH_TWITTER_CLIENT_PW,
      callbackURL: process.env.OAUTH_TWITTER_CALLBACK_URL,
      includeEmail: true,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    // const { id, displayName, picture } = user;

    // const instgramUser = {
    //   id,
    //   email: '',
    //   name: displayName,
    //   piacture: picture?.data?.url,
    // };
    done(null, { ...profile });
  }
}
