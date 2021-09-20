import { Module } from '@nestjs/common';
import { GenerateOgtagImageWithResocUseCase } from './applications/usecases/generate-ogtag-image-with-resoc/generate-ogtag-image-with-resoc.usecase';
import { ImageService } from './image.service';

@Module({
  providers: [ImageService, GenerateOgtagImageWithResocUseCase],
  exports: [ImageService, GenerateOgtagImageWithResocUseCase],
})
export class ImageModule {}
