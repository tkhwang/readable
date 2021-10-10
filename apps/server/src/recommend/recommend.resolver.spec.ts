import { Test, TestingModule } from '@nestjs/testing';
import { RecommendResolver } from './recommend.resolver';

describe('RecommendResolver', () => {
  let resolver: RecommendResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommendResolver],
    }).compile();

    resolver = module.get<RecommendResolver>(RecommendResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
