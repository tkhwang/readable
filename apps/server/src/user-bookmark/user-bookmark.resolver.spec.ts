import { Test, TestingModule } from '@nestjs/testing';
import { UserBookmarkResolver } from './user-bookmark.resolver';

describe('UserBookmarkResolver', () => {
  let resolver: UserBookmarkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBookmarkResolver],
    }).compile();

    resolver = module.get<UserBookmarkResolver>(UserBookmarkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
