import { Module } from '@nestjs/common';
import { UrlInfoResolver } from './url-info.resolver';
import { UrlInfoController } from './url-info.controller';
import { UrlInfoService } from './url-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlInfoRepository } from './infrastructures/typeorm/repositories/url-info.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UrlInfoRepository])],
  providers: [UrlInfoResolver, UrlInfoService],
  controllers: [UrlInfoController],
})
export class UrlInfoModule {}
