import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from '@readable/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import { OAuthUser } from './users/infrastructures/typeorm/entities/oauthUser.entity';
import { User } from './users/infrastructures/typeorm/entities/user.entity';
import { PaginationModule } from './pagination/pagination.module';
import { Tag } from './tags/infrastructures/typeorm/entities/tags.entity';
import { InterestsModule } from './interests/interests.module';
import { Interest } from './interests/infrastructures/typeorm/entities/interest.entity';
import { UserFollow } from './users/infrastructures/typeorm/entities/userFollow.entity';
import { ImageModule } from './image/image.module';
import { UrlInfoModule } from './url-info/url-info.module';
import { UserBookmarkModule } from './user-bookmark/user-bookmark.module';
import { UrlInfo } from './url-info/infrastructures/typeorm/entities/url-info.entity';
import { UserBookmark } from './user-bookmark/infrastructures/typeorm/entities/user-bookmark.entity';
import { TagsModule } from './tags/tags.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
      validationSchema: Joi.object({
        READABLE_RDS_HOST: Joi.string().required(),
        READABLE_RDS_USERNAME: Joi.string().required(),
        READABLE_RDS_PASSWORD: Joi.string().required(),
        READABLE_RDS_DB: Joi.string().required(),
        OAUTH_GOOGLE_CLIENT_ID: Joi.string().required(),
        OAUTH_GOOGLE_CLIENT_PW: Joi.string().required(),
        OAUTH_GOOGLE_CALLBACK_URL: Joi.string().required(),
        OAUTH_GOOGLE_CREDENTIALS: Joi.string().required(),
        TOKEN_SECRET: Joi.string().required(),
        NLP_HOST: Joi.string().required(),
        NLP_SERVER_SECRET: Joi.string().required(),
        AWS_S3_BUCKET: Joi.string().required(),
        AWS_S3_URL_PREFIX: Joi.string().required(),
        AWS_IAM_USER_KEY: Joi.string().required(),
        AWS_IAM_USER_SECRET: Joi.string().required(),
        AWS_ELASTICSEARCH_ENDPOINT: Joi.string().required(),
        AWS_ELASTICSEARCH_BASIC_AUTH_ID: Joi.string().required(),
        AWS_ELASTICSEARCH_BASIC_AUTH_PW: Joi.string().required(),
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
      entities: [OAuthUser, User, Tag, Interest, UserFollow, UrlInfo, UserBookmark],
      synchronize: true,
    }),
    // MEMO(Teddy): MongoDB
    // MongooseModule.forRoot(process.env.READABLE_MONGODB_URL),
    UsersModule,
    AuthModule,
    PaginationModule,
    InterestsModule,
    ImageModule,
    UserBookmarkModule,
    TagsModule,
    UrlInfoModule,
    SearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
