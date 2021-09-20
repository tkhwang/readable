import { Field, InputType } from '@nestjs/graphql';
import { UrlInfo } from '@readable/url-info/infrastructures/typeorm/entities/url-info.entity';

@InputType()
export class GenerateOgtagImageWithResocInput {
  @Field(type => UrlInfo)
  urlInfo: UrlInfo;

  constructor(urlInfo: UrlInfo) {
    this.urlInfo = urlInfo;
  }
}
