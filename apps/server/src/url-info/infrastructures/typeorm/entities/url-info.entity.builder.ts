import { UrlInfo } from './url-info.entity';

export class UrlInfoBuilder {
  urlInfo: UrlInfo;

  constructor() {
    this.urlInfo = new UrlInfo();
    return this;
  }

  setUrl(url: string) {
    this.urlInfo.url = url;
    return this;
  }

  setSiteName(siteName: string) {
    this.urlInfo.siteName = siteName;
    return this;
  }

  setTitle(title: string) {
    this.urlInfo.title = title;
    return this;
  }

  setType(type: string) {
    this.urlInfo.type = type;
    return this;
  }

  setDescription(description: string) {
    this.urlInfo.description = description;
    return this;
  }

  setFavicon(favicon: string) {
    this.urlInfo.favicon = favicon;
    return this;
  }

  setImageUrl(imageUrl: string) {
    this.urlInfo.imageUrl = imageUrl;
    return this;
  }

  build() {
    return this.urlInfo;
  }
}
