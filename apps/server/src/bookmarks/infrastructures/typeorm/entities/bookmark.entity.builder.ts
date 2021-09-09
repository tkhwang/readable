import { Bookmark } from './bookmark.entity';

export class BookmarkBuilder {
  bookmark: Bookmark;

  constructor() {
    this.bookmark = new Bookmark();
    return this;
  }

  setUrl(url: string) {
    this.bookmark.url = url;
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

  setDescription(description: string) {
    this.bookmark.description = description;
    return this;
  }

  setImageUrl(imageUrl: string) {
    this.bookmark.imageUrl = imageUrl;
    return this;
  }

  build() {
    return this.bookmark;
  }
}
