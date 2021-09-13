import { Test, TestingModule } from '@nestjs/testing';
import { UserBookmarkService } from './user-bookmark.service';

describe('UserBookmarkService', () => {
  let service: UserBookmarkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBookmarkService],
    }).compile();

    service = module.get<UserBookmarkService>(UserBookmarkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
