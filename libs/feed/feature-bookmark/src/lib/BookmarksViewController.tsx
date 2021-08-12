import { usePaginationBookmarksViewModel } from '@readable/feed/data-access-pagination-bookmarks';
import { BookmarkCard } from './BookmarkCard';

export const BookmarksViewController = () => {
  const { paginationBookmarks, loading, error } = usePaginationBookmarksViewModel();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* {paginationBookmarks &&
        paginationBookmarks.edges.map(edge => {
          return <BookmarkCard bookmark={edge.node} />;
        })} */}
      {paginationBookmarks?.edges.map(edge => {
        const { id, siteName, title, url, imageUrl, keywords, description, collector } = edge.node;

        return (
          <div className="p-10 ">
            <div className="max-w-2xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
              <a href={url}>
                <img className="w-max" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                </div>
              </a>
              <div className="px-6 pt-4 pb-2">
                {keywords?.map((keyword: string) => {
                  return (
                    <span className="inline-block bg-gray-200 rounded-full px-3  py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {keyword}
                    </span>
                  );
                })}
              </div>
            </div>
            {collector?.length &&
              collector.map(collector => {
                const { name, avatarUrl } = collector;
                return <img className="w-12 rounded-full" src={avatarUrl ?? ''} alt={name} />;
              })}
          </div>
        );
      })}
    </div>
  );
};
