import { Bookmark } from '@readable/shared/types';
import { FunctionComponent } from 'react';

interface Props {
  title: string;
  bookmarks: Bookmark[];
}

export const BookmarkCard: FunctionComponent<Props> = ({ title, bookmarks }) => {
  return (
    <>
      <p className="text-2xl">{title}</p>
      {bookmarks.map(bookmark => {
        return (
          <a href={bookmark.url}>
            <div className="p-10">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={bookmark.imageUrl} alt={bookmark.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{bookmark.title}</div>
                  <p className="text-gray-700 text-base">{bookmark.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {bookmark?.keywords?.map((keyword: string) => {
                    return (
                      <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {keyword}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};
