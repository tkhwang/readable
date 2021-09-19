import { ShadowCard } from '@readable/ui';
import { useDataAccessFeed } from '@readable/home/data-access-home';
import { useEffect, useRef } from 'react';

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
    <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 -my-4 sm:-mx-2">
      {entries?.map(({ id, cursor, imageUrl, description, siteName, profileImageUrl, tags }, index) => {
        return (
          <div key={id} ref={cursor === pageInfo?.endCursor ? target : null} className="mx-2 my-4">
            <ShadowCard
              cardImageUrl={imageUrl}
              description={description}
              siteName={siteName}
              profileImageUrl={profileImageUrl}
              tags={tags}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};
