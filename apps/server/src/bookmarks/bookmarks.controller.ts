import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RequestWithInjectedUser } from '@readable/auth/domain/auth.type';
import { JwtAuthGuard } from '@readable/auth/domain/jwt-auth.guard';
import { GetMyInterestsWithAuthUsecase } from '@readable/interests/applications/usecases/get-my-interests-with-auth/get-my-interests-with-auth.usecase';
import { AddBookMarkWithAuthInput } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.input';
import { AddBookmarkWithAuthUsecase } from './applications/usecases/add-bookmark-with-auth/add-bookmark-with-auth.usecase';
import { GetUrlInfoUsecase } from './applications/usecases/get-urlinfo/get-urlinfo.usecase';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(
    private readonly addBookmarkWithAuthUsecase: AddBookmarkWithAuthUsecase,
    private readonly getMyInterestsWithAuthUsecase: GetMyInterestsWithAuthUsecase,
    private readonly getUrlInfoUsecase: GetUrlInfoUsecase,
    private readonly bookmarksService: BookmarksService
  ) {}

  /**
   * @deprecated: Use getUrlInfo(POST /url-info) instead
   */
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async getUrlInfo(@Body('url') url: string, @Request() req: RequestWithInjectedUser) {
    const requestUser = req.user;

    const [urlInfo, myInterests /*, nlpAnalysis*/] = await Promise.all([
      this.getUrlInfoUsecase.execute({ url }),
      this.getMyInterestsWithAuthUsecase.execute(requestUser),
      // this.bookmarksService.getNlpAnalysis(url),
    ]);

    return {
      urlInfo: { ...urlInfo },
      interests: { ...myInterests },
      // TODO(Teddy): WIP
      // tags: [ ...nlpAnalysis.tags ],
      // summary: nlpAnalysis.summary,
      tags: [urlInfo.siteName],
      summary: '',
    };
  }

  /**
   * @deprecated: Use addUserBookmark (POST /user-bookmark) instaead
   */
  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addBookmarkWithAuth(
    @Body('url') url: string,
    @Body('interest') interest: string,
    @Body('tags') tags: string[] = [],
    @Request() req: RequestWithInjectedUser
  ) {
    const requestUser = req.user;
    const addBookMarkWithAuthInput = new AddBookMarkWithAuthInput(url, interest, tags);
    return this.addBookmarkWithAuthUsecase.execute(addBookMarkWithAuthInput, requestUser);
  }
}
