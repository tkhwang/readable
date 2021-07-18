import { Injectable } from '@nestjs/common';
import { UsersService } from '@readable/users/users.service';
import { RequestWithInjectedUser } from './auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async googleLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from google';

    const { user } = req;
    return this.usersService.signinOrCreateUser(user);
  }

  async githubLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from github';

    const { user } = req;
    return this.usersService.signinOrCreateUser(user);
  }

  async facebookLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from facebook';

    const { user } = req;
    return this.usersService.signinOrCreateUser(user);
  }

  twitterLogin(req: RequestWithInjectedUser) {
    if (!req.user) return 'No user from twitter';

    return {
      message: 'User information from twitter',
      user: req.user,
    };
  }
}
