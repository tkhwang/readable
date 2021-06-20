import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'apps/server/src/schema.gql'),
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
