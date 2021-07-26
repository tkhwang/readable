import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infrastructures/typeorm/entities/user.entity';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';
import { OAuthUser } from './infrastructures/typeorm/entities/oauthUser.entity';
import { OAuthUsersRepository } from './infrastructures/typeorm/repositories/oauthUsers.repository';
import { SigninUsecase } from './application/usecases/signin/signin.usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([OAuthUser, User]),
    PassportModule,
    JwtModule.register({
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UsersResolver, UsersService, OAuthUsersRepository, UsersRepository, SigninUsecase],
  exports: [UsersService, JwtModule, SigninUsecase],
})
export class UsersModule {}
