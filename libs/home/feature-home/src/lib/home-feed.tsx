import { ShadowCard } from '@readable/ui';
import { useDataAccessFeed } from '@readable/home/data-access-home';
import { useEffect, useRef } from 'react';

export const HomeFeed = () => {
  const { entries, pageInfo, fetchMoreFeedData } = useDataAccessFeed();

  const target = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.5,
    };

    const handleIntersection = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (!entry.isIntersecting) {
        return;
      }

      fetchMoreFeedData();

      observer.unobserve(entry.target);
      if (target.current) {
        observer.observe(target.current);
      }
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      intersectionObserver.observe(target.current);
    }

    return () => intersectionObserver && intersectionObserver.disconnect();
  }, [fetchMoreFeedData]);

  return (
    <ul className="space-y-6">
      {entries?.map(({ cursor, urlInfo, cardOwner, tags, bookmarkersCount, readersCount }) => {
        return (
          <li key={urlInfo.id} ref={cursor === pageInfo?.endCursor ? target : null}>
            <a href={urlInfo.url}>
              <ShadowCard
                urlInfo={urlInfo}
                cardOwner={cardOwner}
                tags={tags}
                bookmarkersCount={bookmarkersCount}
                readersCount={readersCount}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
