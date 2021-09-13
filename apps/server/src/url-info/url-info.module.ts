import { Module } from '@nestjs/common';
import { UrlInfoResolver } from './url-info.resolver';
import { UrlInfoController } from './url-info.controller';
import { UrlInfoService } from './url-info.service';

@Module({
  providers: [UrlInfoResolver, UrlInfoService],
  controllers: [UrlInfoController]
})
export class UrlInfoModule {}
