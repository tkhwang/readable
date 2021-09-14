import { Test, TestingModule } from '@nestjs/testing';
import { UserBookmarkController } from './user-bookmark.controller';

describe('UserBookmarkController', () => {
  let controller: UserBookmarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBookmarkController],
    }).compile();

    controller = module.get<UserBookmarkController>(UserBookmarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
