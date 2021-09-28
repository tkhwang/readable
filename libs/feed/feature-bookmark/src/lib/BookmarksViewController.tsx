import { usePaginationUserBookmarksViewModel } from '@readable/feed/data-access-pagination-bookmarks';

export const BookmarksViewController = () => {
  const { paginationUserBookmarks, loading, error } = usePaginationUserBookmarksViewModel();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* {paginationBookmarks &&
        paginationBookmarks.edges.map(edge => {
          return <BookmarkCard bookmark={edge.node} />;
        })} */}
      {paginationUserBookmarks?.edges.map(edge => {
        const { urlInfo, interest, tags, bookmarkers, bookmarkersCount, readers, readersCount } = edge.node;
        const { id, siteName, title, url, favicon, imageUrl, description } = urlInfo;

        return (
          <div className="p-10 ">
            <div className="max-w-2xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
              <a href={url}>
                <img className="w-max" src={imageUrl || ''} alt={title || ''} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                  {favicon && <img className="w-16" src={favicon || ''} alt={title || ''} />}
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
            </div>
            <div className="h-16 flex flex-wrap content-start">
              Bookmarker ({bookmarkersCount || 0}) :
              {bookmarkers &&
                bookmarkers.length > 0 &&
                bookmarkers.map(bookmarker => {
                  const { name, avatarUrl } = bookmarker;
                  return <img className="w-12 rounded-full m-1" src={avatarUrl ?? ''} alt={name} />;
                })}
            </div>
            <div className="h-16 flex flex-wrap content-start">
              Reader ({readersCount || 0}) :
              {readers &&
                readers.length > 0 &&
                readers.map(reader => {
                  const { name, avatarUrl } = reader;
                  return <img className="w-12 rounded-full m-1" src={avatarUrl ?? ''} alt={name} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
