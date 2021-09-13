import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UrlInfo } from '../entities/url-info.entity';

@Injectable()
@EntityRepository(UrlInfo)
export class UrlInfoRepository extends Repository<UrlInfo> {}
