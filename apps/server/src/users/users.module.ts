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
import { FollowUserWithAuthUsecase } from './applications/usecases/follow-user-with-auth/follow-user-with-auth.usecase';
import { UnfollowUserWithAuthUsecase } from './applications/usecases/unfollow-user-with-auth/unfollow-user-with-auth.usecase';
import { FindManyUserBookmarksHavingUsersWithAuthUsecase } from './applications/usecases/find-users-having-many-userBookmarks-with-auth/find-users-having-many-userBookmarks-with-auth.usecase';
import { UserBookmarkRepository } from '@readable/user-bookmark/infrastructures/typeorm/repositories/user-bookmark.repository';
import { FindUsersHavingManyFollowersWithAuthUsecase } from './applications/usecases/find-users-having-many-followers-with-auth/find-users-having-many-followers-with-auth.usecase';
import { FindMyUserBookmarksGroupedByInterestsUsecase } from '../user-bookmark/applications/usecases/find-my-userBookmarks-grouped-by-interests/find-my-userBookmarks-grouped-by-interests.usecase';
import { InterestsRepository } from '@readable/interests/infrastructures/typeorm/repositories/interest.repository';
import { GetUserProfileUseCase } from './applications/usecases/get-user-profile/get-user-profile.usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OAuthUsersRepository,
      UsersRepository,
      UserFollowsRepository,
      UserBookmarkRepository,
      InterestsRepository,
    ]),
    PassportModule,
    JwtModule.register({
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    UsersResolver,
    UsersService,
    SigninUsecase,
    FollowUserWithAuthUsecase,
    UnfollowUserWithAuthUsecase,
    FindManyUserBookmarksHavingUsersWithAuthUsecase,
    FindUsersHavingManyFollowersWithAuthUsecase,
    FindMyUserBookmarksGroupedByInterestsUsecase,
    GetUserProfileUseCase,
  ],
  exports: [UsersService, JwtModule, SigninUsecase],
})
export class UsersModule {}
