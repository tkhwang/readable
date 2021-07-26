/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RequestWithInjectedUser } from './domain/auth.type';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req: RequestWithInjectedUser) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: RequestWithInjectedUser, @Res() res: Response) {
    const token = await this.authService.googleLogin(req);

    if (token) {
      res.redirect(`${process.env.CLIENT_HOST}/auth?token=${token}`);
    }
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req: RequestWithInjectedUser) {}

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthRedirect(@Req() req: RequestWithInjectedUser, @Res() res: Response) {
    const token = await this.authService.githubLogin(req);

    if (token) {
      res.redirect(`${process.env.CLIENT_HOST}/auth?token=${token}`);
    }
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Req() req: RequestWithInjectedUser) {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req: RequestWithInjectedUser, @Res() res: Response) {
    const token = await this.authService.facebookLogin(req);

    if (token) {
      res.redirect(`${process.env.CLIENT_HOST}/auth?token=${token}`);
    }
  }
}
