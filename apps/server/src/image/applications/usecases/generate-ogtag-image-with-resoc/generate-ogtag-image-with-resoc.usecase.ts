import { Usecase } from '@readable/common/applications/usecase';
import { GenerateOgtagImageWithResocInput } from './generate-ogtag-image-with-resoc.input';
import { FacebookOpenGraph } from '@resoc/core';
import { createImage } from '@resoc/create-img';
import * as path from 'path';
import { IMAGE } from '@readable/image/domain/models/image.models';
import * as fs from 'fs/promises';
import { S3 } from '@readable/lib/S3';

export class GenerateOgtagImageWithResocUseCase implements Usecase<GenerateOgtagImageWithResocInput, string> {
  async execute(command: GenerateOgtagImageWithResocInput) {
    const { urlInfo } = command;

    const manifestJsonFile = path.resolve(
      __dirname,
      '../../../apps/server/src/image/applications/usecases/generate-ogtag-image-with-resoc/resoc/resoc.manifest.json'
    );

    try {
      await createImage(
        manifestJsonFile,
        {
          title: urlInfo.title || urlInfo.url || '',
          siteName: urlInfo.siteName || '',
          imageUrl: '',
        },
        FacebookOpenGraph,
        IMAGE.GENERATED_SCREENSHOT.TEMP_FILE
      );

      const generatedFile = path.resolve(__dirname, `../../../${IMAGE.GENERATED_SCREENSHOT.TEMP_FILE}`);
      const buffer = await fs.readFile(generatedFile);
      const url = await S3.uploadToS3(IMAGE.GENERATED_SCREENSHOT.S3_BUCKET, urlInfo.urlHash, buffer);

      return url || '';
    } catch (error) {
      return '';
    }
  }
}
