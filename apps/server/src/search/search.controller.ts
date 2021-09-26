import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@readable/auth/domain/jwt-auth.guard';
import { SuggestTagInput } from './applications/usecases/suggest-tag/suggest-tag.input';
import { SuggestTagUsecase } from './applications/usecases/suggest-tag/suggest-tag.usecase';

@Controller('search')
export class SearchController {
  constructor(private readonly suggestTagUsecase: SuggestTagUsecase) {}

  @UseGuards(JwtAuthGuard)
  @Post('/tag-suggest')
  async tagSuggestion(@Body('query') query: string) {
    const input = new SuggestTagInput();
    input.query = query;

    return this.suggestTagUsecase.execute(input);
  }
}
