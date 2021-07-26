import { Injectable } from '@nestjs/common';
import { SigninOrCreateUserUsercase } from '@readable/users/usecases/signin-or-create-user/signin-or-create-user.usecase';
import { RequestWithInjectedUser } from './auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly signinOrCreateUserUsercase: SigninOrCreateUserUsercase) {}

  async googleLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from google';

    const { user } = req;
    return this.signinOrCreateUserUsercase.execute(user);
  }

  async githubLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from github';

    const { user } = req;
    return this.signinOrCreateUserUsercase.execute(user);
  }

  async facebookLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from facebook';

    const { user } = req;
    return this.signinOrCreateUserUsercase.execute(user);
  }

  twitterLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from twitter';

    return {
      message: 'User information from twitter',
      user: req.user,
    };
  }
}
