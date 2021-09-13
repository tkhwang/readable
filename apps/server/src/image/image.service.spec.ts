import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkBuilder } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity.builder';
import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageService],
    }).compile();

    service = module.get<ImageService>(ImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate an image', () => {
    const bookmark = new BookmarkBuilder()
      .setTitle('Readable first image')
      .setUrl('https://readable-2021.vercel.app/')
      .setSiteName('readable')
      .setType('website')
      .build();

    const image = service.generateImage(bookmark);
  });
});
