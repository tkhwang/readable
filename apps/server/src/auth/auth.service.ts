import { Injectable } from '@nestjs/common';
import { UsersService } from '@readable/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async googleLogin(req) {
    if (!req.user) return 'No user from google';

    const { user } = req;
    const newUser = await this.usersService.create(user);

    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  githubLogin(req) {
    if (!req.user) return 'No user from github';

    return {
      message: 'User information from github',
      user: req.user,
    };
  }

  facebookLogin(req) {
    if (!req.user) return 'No user from facebook';

    return {
      message: 'User information from facebook',
      user: req.user,
    };
  }

  twitterLogin(req) {
    if (!req.user) return 'No user from twitter';

    return {
      message: 'User information from twitter',
      user: req.user,
    };
  }
}
