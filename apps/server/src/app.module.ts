import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from '@readable/users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from './jwt/jwt.module';
import * as Joi from 'joi';

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
      // dateStrings: ['DATE'],
      entities: [User],
      // entities: ['./dist/entities/*.js'],
      // migrations: ['./src/migrations/*.ts'],
      // cli: {
      //   migrationsDir: './src/migrations',
      // },
      synchronize: true,
    }),
    MongooseModule.forRoot(process.env.READABLE_MONGODB_URL),
    UsersModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
