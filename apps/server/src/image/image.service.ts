import { Injectable } from '@nestjs/common';
import { Bookmark } from '@readable/bookmarks/infrastructures/typeorm/entities/bookmark.entity';
import * as Jimp from 'jimp';

@Injectable()
export class ImageService {
  async generateImage(bookmark: Bookmark) {
    const { title } = bookmark;
    const message = title || '';

    try {
      const image = await Jimp.read('https://www.tutorialspoint.com/assets/questions/media/51659/Text.png');
      const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

      image.print(font, 10, 10, message);
      await image.writeAsync('./textOverlay.png');
    } catch (error) {
      console.error(error);
    }
  }
}
