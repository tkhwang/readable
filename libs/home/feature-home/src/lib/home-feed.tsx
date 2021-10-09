import { ShadowCard } from '@readable/ui';
import { useDataAccessFeed } from '@readable/home/data-access-home';
import { useEffect, useRef } from 'react';
import { DEFAULT_CARD_COVER_IMAGE_URL, DEFAULT_FAVICON_IMAGE_URL, DEFAULT_PROFILE_IMAGE_URL } from '../const';

export const HomeFeed = () => {
  const { entries, pageInfo, fetchMoreFeedData } = useDataAccessFeed();

  const target = useRef<HTMLDivElement>(null);

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
    <>
      {entries?.map(({ cursor, urlInfo, cardOwner, tags, bookmarkersCount, readersCount }, index) => {
        return (
          <div key={urlInfo.id} ref={cursor === pageInfo?.endCursor ? target : null} className="my-6">
            <ShadowCard
              urlInfo={urlInfo}
              cardOwner={cardOwner}
              tags={tags}
              bookmarkersCount={bookmarkersCount}
              readersCount={readersCount}
            />
          </div>
        );
      })}
    </>
  );
};
