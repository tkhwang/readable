import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './facebook.strategy';
import { GithubStrategy } from './github.strategy';
import { GoogleStrategy } from './google.strategy';
import { TwitterStrategy } from './twitter.strategy';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, GithubStrategy, FacebookStrategy, TwitterStrategy],
})
export class AuthModule {}
