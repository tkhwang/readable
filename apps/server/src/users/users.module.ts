import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from '../mongooseModels/user/user.model';

@Module({
  imports: [TypegooseModule.forFeature([UserModel])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
