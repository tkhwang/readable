import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from '@readable/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { Bookmark } from './bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { OAuthUser } from './users/infrastructures/typeorm/entities/oauthUser.entity';
import { User } from './users/infrastructures/typeorm/entities/user.entity';
import { BookmarkUser } from './bookmarks/infrastructures/typeorm/entities/bookmarkUser.entity';
import { PaginationModule } from './pagination/pagination.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
      validationSchema: Joi.object({
        TOKEN_SECRET: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), 'apps/server/src/graphql-types.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.READABLE_RDS_HOST,
      port: 3306,
      database: process.env.READABLE_RDS_DB,
      username: process.env.READABLE_RDS_USERNAME,
      password: process.env.READABLE_RDS_PASSWORD,
      charset: 'utf8mb4',
      logging: true,
      entities: [OAuthUser, User, Bookmark, BookmarkUser],
      synchronize: true,
    }),
    // MEMO(Teddy): MongoDB
    // MongooseModule.forRoot(process.env.READABLE_MONGODB_URL),
    UsersModule,
    AuthModule,
    BookmarksModule,
    PaginationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
