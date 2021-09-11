import { Injectable } from '@nestjs/common';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import { S3 } from '@readable/lib/S3';
import * as Jimp from 'jimp';
import { IMAGE } from './domain/models/image.models';
import { promisify } from 'util';

@Injectable()
export class ImageService {
  async generateImage(bookmark: Bookmark) {
    const { urlHash } = bookmark;

    try {
      const image = await Jimp.read(IMAGE.GENERATED_SCREENSHOT.BACKGROUND_FILE);
      const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

      image.print(font, 50, 90, bookmark.title ?? '');
      image.print(font, 50, 450, bookmark.type ?? '');
      image.print(font, 50, 500, bookmark.siteName ?? '');

      await image.writeAsync(IMAGE.GENERATED_SCREENSHOT.TEMP_FILE);
      const img = await Jimp.read(IMAGE.GENERATED_SCREENSHOT.TEMP_FILE);

      // https://github.com/oliver-moran/jimp/issues/90#issuecomment-408650356
      const boundGetBuffer = promisify(img.getBuffer.bind(image));
      const buffer = await boundGetBuffer(Jimp.MIME_PNG);

      const url = await S3.uploadToS3(IMAGE.GENERATED_SCREENSHOT.S3_BUCKET, urlHash, buffer);
      return url;
    } catch (error) {
      console.error(error);
      return '';
    }
  }
}
