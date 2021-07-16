import { BookmarkImage } from './bookmark-image.model';
import { Bookmark } from './bookmark.entity';

export class BookmarkBuilder {
  bookmark: Bookmark;

  constructor() {
    this.bookmark = new Bookmark();
    return this;
  }

  setSiteName(siteName: string) {
    this.bookmark.siteName = siteName;
    return this;
  }

  setTitle(title: string) {
    this.bookmark.title = title;
    return this;
  }

  setType(type: string) {
    this.bookmark.type = type;
    return this;
  }

  setUrl(url: string) {
    this.bookmark.url = url;
    return this;
  }

  setDescription(description: string) {
    this.bookmark.description = description;
    return this;
  }

  setImage(image: BookmarkImage) {
    this.bookmark.image = image;
    return this;
  }

  build() {
    return this.bookmark;
  }
}
