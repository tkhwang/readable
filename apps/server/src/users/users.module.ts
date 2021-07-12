import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserMongoModel, UserSchema } from './schema/user.schema';
import { User, UserSchema } from '@readable/users/entities/user.entity';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService, JwtModule],
})
export class UsersModule {}
