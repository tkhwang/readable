import { Module } from '@nestjs/common';
import { RecommendService } from './recommend.service';

@Module({
  providers: [RecommendService]
})
export class RecommendModule {}
