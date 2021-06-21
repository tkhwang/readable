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
    // TODO(Teddy): TypeORM config
    // TypeOrmModule.forRoot(),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
