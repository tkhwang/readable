import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/server/src/graphql-types.gql'),
      sortSchema: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   database: 'readable-dev',
    //   entities: ['dist/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
