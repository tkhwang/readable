import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './infrastructures/typeorm/repositories/users.repository';
import { OAuthUsersRepository } from './infrastructures/typeorm/repositories/oauthUsers.repository';
import { SigninUsecase } from './applications/usecases/signin/signin.usecase';
import { UserFollowsRepository } from './infrastructures/typeorm/repositories/userFollow.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OAuthUsersRepository, UsersRepository, UserFollowsRepository]),
    PassportModule,
    JwtModule.register({
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UsersResolver, UsersService, SigninUsecase],
  exports: [UsersService, JwtModule, SigninUsecase],
})
export class UsersModule {}
