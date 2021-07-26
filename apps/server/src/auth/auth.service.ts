import { Injectable } from '@nestjs/common';
import { SigninUsecase } from '@readable/users/application/usecases/signin/signin.usecase';
import { RequestWithInjectedUser } from './domain/auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly signinUsecase: SigninUsecase) {}

  async googleLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from google';

    const { user } = req;
    return this.signinUsecase.execute(user);
  }

  async githubLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from github';

    const { user } = req;
    return this.signinUsecase.execute(user);
  }

  async facebookLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from facebook';

    const { user } = req;
    return this.signinUsecase.execute(user);
  }

  twitterLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from twitter';

    return {
      message: 'User information from twitter',
      user: req.user,
    };
  }
}
