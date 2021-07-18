import { BookmarkEntity } from './bookmark.entity';

export class BookmarkBuilder {
  bookmark: BookmarkEntity;

  constructor() {
    this.bookmark = new BookmarkEntity();
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

  // setImage(image: BookmarkImage) {
  //   this.bookmark.image = image;
  //   return this;
  // }

  setTags(tags: string[]) {
    this.bookmark.tags = [...tags];
    return this;
  }

  build() {
    return this.bookmark;
  }
}
