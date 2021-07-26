import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { AuthProviders } from '@readable/auth/auth.type';
import { SocialSigninInput } from '@readable/users/usecases/signin-or-create-user/signin-or-create-user.input';

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
    const githubUser = new SocialSigninInput();
    githubUser.name = user?.displayName ?? user?.username;
    githubUser.provider = AuthProviders.Github;
    githubUser.providerId = user.id;
    githubUser.email = user?.emails?.[0]?.value;
    githubUser.avatarUrl = user?.photos?.[0]?.value;

    done(null, githubUser);
  }
}
