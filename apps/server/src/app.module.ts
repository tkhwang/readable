import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/server/src/graphql-types.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      entities: ['./dist/entities/*.js'],
      migrations: ['./src/migrations/*.ts'],
      host: process.env.READABLE_RDS_HOST,
      database: process.env.READABLE_RDS_DB,
      username: process.env.READABLE_RDS_USERNAME,
      password: process.env.READABLE_RDS_PASSWORD,
      port: 3306,
      charset: 'utf8mb4',
      logging: true,
      dateStrings: ['DATE'],
      cli: {
        migrationsDir: './src/migrations',
      },
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
