import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from '@readable/users/entities/user.entity';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
