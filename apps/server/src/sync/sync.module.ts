import { Module } from '@nestjs/common';
import { SyncService } from './sync.service';

@Module({
  providers: [SyncService]
})
export class SyncModule {}
