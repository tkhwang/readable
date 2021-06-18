import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';

@Module({
  providers: [PetsService, PetsResolver]
})
export class PetsModule {}
