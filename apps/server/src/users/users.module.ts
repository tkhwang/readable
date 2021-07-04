import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongoModel, UserSchema } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserMongoModel.name, schema: UserSchema }])],
  // imports: [],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
