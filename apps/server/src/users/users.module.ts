import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserMongoModel, UserSchema } from './schema/user.schema';
import { User, UserSchema } from '@readable/users/entities/user.entity';
import { UsersRepository } from './users.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
