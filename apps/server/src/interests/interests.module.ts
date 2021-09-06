import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestsRepository } from './infrastructures/mongo/repositories/interest.repository';
import { InterestsService } from './interests.service';
import { InterestsResolver } from './interests.resolver';
import { FindOrAddInterestWithAuthUseCase } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.usecase';
import { GetMyInterestsWithAuthUsecase } from './applications/usecases/get-my-interests-with-auth/get-my-interests-with-auth.usecase';
import { InterestsController } from './interests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InterestsRepository])],
  providers: [InterestsResolver, InterestsService, GetMyInterestsWithAuthUsecase, FindOrAddInterestWithAuthUseCase],
  controllers: [InterestsController],
})
export class InterestsModule {}
