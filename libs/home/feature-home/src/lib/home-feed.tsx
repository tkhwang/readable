import { ShadowCard } from '@readable/ui';
import { useDataAccessFeed } from '@readable/home/data-access-home';
import { useEffect, useRef } from 'react';

export const HomeFeed = () => {
  const { entries, pageInfo, fetchMoreFeed } = useDataAccessFeed();

  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.5,
    };

    const handleIntersection = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (!entry.isIntersecting) {
        return;
      }

      fetchMoreFeed();

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
  }, [fetchMoreFeed]);

  return (
    <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 -my-4 sm:-mx-2">
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>
      <div className="mx-2 my-4">
        <ShadowCard />
      </div>

      {/* {entries?.map(({ id, cursor, imageUrl }) => {
        return (
          <div key={id} ref={cursor === pageInfo?.endCursor ? target : null}>
            <Card imageUrl={imageUrl}></Card>
          </div>
        );
      })} */}
    </div>
  );
};
