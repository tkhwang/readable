import { Test, TestingModule } from '@nestjs/testing';
import { UrlInfoService } from './url-info.service';

describe('UrlInfoService', () => {
  let service: UrlInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlInfoService],
    }).compile();

    service = module.get<UrlInfoService>(UrlInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
