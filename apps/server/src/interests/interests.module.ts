import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestsRepository } from './infrastructures/mongo/repositories/interest.repository';
import { InterestsController } from './interests.controller';
import { InterestsService } from './interests.service';

@Module({
  imports: [TypeOrmModule.forFeature([InterestsRepository])],
  controllers: [InterestsController],
  providers: [InterestsService],
})
export class InterestsModule {}
