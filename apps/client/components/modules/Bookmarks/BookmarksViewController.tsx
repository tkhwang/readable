import { ViewController } from '@readable/types/ViewController';
import React from 'react';
import { BookmarksViewModel } from './useBookmarks.query';

export const BookmarksViewController: ViewController<BookmarksViewModel> = React.memo(({ viewModel }) => {
  const { myBookmarks, anonymousBookmarks, loading, error } = viewModel;

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <p className="text-2xl">My Bookmarks</p>
      {myBookmarks?.length > 0 &&
        myBookmarks.map(bookmark => {
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
                    {bookmark?.tags?.map(tag => {
                      return (
                        <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {tag}
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
});
