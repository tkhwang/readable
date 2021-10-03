import { ShadowCard } from '@readable/ui';
import { useDataAccessFeed } from '@readable/home/data-access-home';
import { useEffect, useRef } from 'react';
import { DEFAULT_CARD_COVER_IMAGE_URL, DEFAULT_PROFILE_IMAGE_URL } from '../const';

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
      <div className="text-xl text-gray-300 font-bold">Here's what we found based on your interests...</div>
      {entries?.map(({ id, cursor, imageUrl, description, siteName, profileImageUrl, tags, title }, index) => {
        return (
          <div key={id} ref={cursor === pageInfo?.endCursor ? target : null} className="my-6">
            <ShadowCard
              cardImageUrl={imageUrl ?? DEFAULT_CARD_COVER_IMAGE_URL}
              description={description ?? ''}
              siteName={siteName ?? ''}
              profileImageUrl={profileImageUrl ?? DEFAULT_PROFILE_IMAGE_URL}
              tags={tags}
              index={index}
              title={title ?? ''}
            />
          </div>
        );
      })}
    </>
  );
};
