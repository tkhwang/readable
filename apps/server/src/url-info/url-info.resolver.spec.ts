import { Test, TestingModule } from '@nestjs/testing';
import { UrlInfoResolver } from './url-info.resolver';

describe('UrlInfoResolver', () => {
  let resolver: UrlInfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlInfoResolver],
    }).compile();

    resolver = module.get<UrlInfoResolver>(UrlInfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
