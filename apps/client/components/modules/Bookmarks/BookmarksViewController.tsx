import { ViewController } from '@readable/types/ViewController';
import React from 'react';
import { BookmarksViewModel } from './useBookmarks.query';

export const BookmarksViewController: ViewController<BookmarksViewModel> = React.memo(({ viewModel }) => {
  const { myBookmarks, loading, error } = viewModel;

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
          const { url, imageUrl, title, description } = bookmark;

          return (
            <div className="p-10">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <a href={url}>
                  <img className="w-full" src={imageUrl} alt={title} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                  </div>
                </a>
                <div className="px-6 pt-4 pb-2">
                  {bookmark?.tags?.map(tag => {
                    return (
                      <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <ul>
                  <li>factual: ${}</li>
                </ul>
                <button className="bg-transparent hover:bg-red-500 text-red-700 text-base hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  delete
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-base hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  FACTful
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 text-base hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  INSIGHTful
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
});
