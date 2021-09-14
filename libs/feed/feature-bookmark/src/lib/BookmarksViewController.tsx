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
        const { urlInfo, interest, tags } = edge.node;
        const { id, siteName, title, url, imageUrl, description /*, collectors, schedulers, finishers*/ } = urlInfo;

        return (
          <div className="p-10 ">
            <div className="max-w-2xl rounded overflow-hidden shadow-lg border-2 border-gray-200 hover:border-blue-500">
              <a href={url}>
                <img className="w-max" src={imageUrl || ''} alt={title || ''} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                </div>
              </a>
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
            {/* <div className="h-16 flex flex-wrap content-start">
              Collectors:
              {collectors &&
                collectors.length > 0 &&
                collectors.map(collector => {
                  const { name, avatarUrl } = collector;
                  return <img className="w-12 rounded-full m-1" src={avatarUrl ?? ''} alt={name} />;
                })}
            </div>
            <div className="h-16 flex flex-wrap content-start">
              Schedulers:
              {schedulers &&
                schedulers.length > 0 &&
                schedulers.map(scheduler => {
                  const { name, avatarUrl } = scheduler;
                  return <img className="w-12 rounded-full m-1" src={avatarUrl ?? ''} alt={name} />;
                })}
            </div>
            <div className="h-16 flex flex-wrap content-start">
              Finishers:
              {finishers &&
                finishers.length > 0 &&
                finishers.map(finisher => {
                  const { name, avatarUrl } = finisher;
                  return <img className="w-12 rounded-full m-1" src={avatarUrl ?? ''} alt={name} />;
                })}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
