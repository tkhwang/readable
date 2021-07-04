import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.OAUTH_GITHIB_CLIENT_PW,
      callbackURL: process.env.OAUTH_GITHIB_CALLBACK_URL,
    });
  }
  async validate(accessToken: string, refreshToken: string, user: any, done: any): Promise<any> {
    // const githubUser = {
    //   id: user.id,
    //   token: accessToken,
    //   name: user.displayName,
    //   email: user.emails ? user.emails[0].value : '',
    //   photo: user.photos ? user.photos[0].value : '',
    //   username: user.username,
    // };
    done(null, { ...user });
  }
}
