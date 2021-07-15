import { BookmarkImage } from './bookmark-image.model';

export class BookmarkImageBuilder {
  bookmarkImage: BookmarkImage;

  constructor() {
    this.bookmarkImage = new BookmarkImage();
  }

  setUrl(url?: string) {
    this.bookmarkImage.url = url ?? '';
    return this;
  }

  setType(type?: string) {
    this.bookmarkImage.type = type ?? '';
    return this;
  }

  setWidth(width?: string) {
    this.bookmarkImage.width = width ?? '';
    return this;
  }

  setHeight(height?: string) {
    this.bookmarkImage.height = height ?? '';
    return this;
  }

  build() {
    return this.bookmarkImage;
  }
}
