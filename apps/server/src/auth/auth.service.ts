import { Injectable } from '@nestjs/common';
import { SigninUsercase } from '@readable/users/application/usecases/signin/signin.usecase';
import { RequestWithInjectedUser } from './domain/auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly signinUsercase: SigninUsercase) {}

  async googleLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from google';

    const { user } = req;
    return this.signinUsercase.execute(user);
  }

  async githubLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from github';

    const { user } = req;
    return this.signinUsercase.execute(user);
  }

  async facebookLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from facebook';

    const { user } = req;
    return this.signinUsercase.execute(user);
  }

  twitterLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from twitter';

    return {
      message: 'User information from twitter',
      user: req.user,
    };
  }
}
