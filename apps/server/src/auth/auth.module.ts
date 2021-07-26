import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './domain/strategies/facebook.strategy';
import { GithubStrategy } from './domain/strategies/github.strategy';
import { GoogleStrategy } from './domain/strategies/google.strategy';
import { JwtStrategy } from './domain/strategies/jwt.strategy';
import { TwitterStrategy } from './domain/strategies/twitter.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, GoogleStrategy, GithubStrategy, FacebookStrategy, TwitterStrategy],
  exports: [AuthService],
})
export class AuthModule {}
