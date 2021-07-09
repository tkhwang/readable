/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const token = await this.authService.googleLogin(req);

    if (token) {
      res.redirect(`${process.env.CLIENT_HOST}/token?token=${token}`);
    }
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req) {}

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const token = await this.authService.githubLogin(req);

    if (token) {
      res.redirect(`${process.env.CLIENT_HOST}/token?token=${token}`);
    }
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Req() req) {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const token = await this.authService.facebookLogin(req);

    if (token) {
      res.redirect(`${process.env.CLIENT_HOST}/token?token=${token}`);
    }
  }

  @Get('twitter')
  @UseGuards(AuthGuard('twitter'))
  async twitterAuth(@Req() req) {}

  @Get('twitter/callback')
  @UseGuards(AuthGuard('twitter'))
  twitterAuthRedirect(@Req() req) {
    return this.authService.twitterLogin(req);
  }
}
