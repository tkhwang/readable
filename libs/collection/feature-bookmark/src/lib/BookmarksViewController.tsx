import React from 'react';
import { useUserBookmarks } from '@readable/collection/data-access-bookmark';
import { useSyncBookmarks } from '@readable/collection/data-access-sync';
import { AddInGoogleEventsInput, Bookmark, BookmarkBRFO, BookmarkInput } from '@readable/shared/types';

export const BookmarksViewController = () => {
  const { myUserBookmarks, loading, error } = useUserBookmarks();
  const { addBookmarkInGoogleEventsMutation } = useSyncBookmarks();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }

  // TODO(Teddy): WIP
  const handleSyncBookmark = async (bookmark?: any) => {
    if (!bookmark) return;

    const { url, title } = bookmark;
    const addInGoogleEventsInput: AddInGoogleEventsInput = {
      bookmarks: [
        {
          url,
          title,
          scheduledAt: new Date(),
        },
      ],
    };
    await addBookmarkInGoogleEventsMutation({ variables: { addInGoogleEventsInput } });
  };

  return (
    <>
      <p className="text-2xl">My Bookmarks</p>
      {myUserBookmarks?.length > 0 &&
        myUserBookmarks.map(userBookmark => {
          const { urlInfo, interest, tags } = userBookmark;
          const { id: bookmarkId, url, imageUrl, title, description } = urlInfo;

          // const handleDelete = () => {
          //   deleteBookmarkWithAuthMutation({
          //     variables: {
          //       deleteBookmarkWithAuthInput: { bookmarkId },
          //     },
          //   });
          // };

          return (
            <div className="p-10">
              <div className="max-w-2xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
                <a href={url}>
                  <img className="w-full" src={imageUrl || ''} alt={title || ''} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                  </div>
                </a>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {interest.interest || ''}
                  </span>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {tags?.map(tag => {
                    return (
                      <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tag.tag}
                      </span>
                    );
                  })}
                </div>
                <button
                  className="bg-transparent hover:bg-red-500 text-red-700 text-base hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                  onClick={() => {}}
                >
                  delete
                </button>
                {/* <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 text-base hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={async () => handleSyncBookmark(bookmark)}
                >
                  sync
                </button> */}
              </div>
            </div>
          );
        })}
    </>
  );
};
