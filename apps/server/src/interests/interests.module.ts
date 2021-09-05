import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestsRepository } from './infrastructures/mongo/repositories/interest.repository';
import { InterestsService } from './interests.service';
import { InterestsResolver } from './interests.resolver';
import { FindOrAddInterestWithAuthUseCase } from './applications/usecases/find-or-add-interest/find-or-add-interest-with-auth.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([InterestsRepository])],
  providers: [InterestsResolver, InterestsService, FindOrAddInterestWithAuthUseCase],
})
export class InterestsModule {}