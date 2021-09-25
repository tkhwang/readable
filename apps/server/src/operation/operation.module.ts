import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { TagsModule } from '@readable/tags/tags.module';

@Module({
  imports: [TagsModule],
  providers: [OperationService],
  controllers: [OperationController],
})
export class OperationModule {}
