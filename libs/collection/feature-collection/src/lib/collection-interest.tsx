import { ActionCard } from '@readable/ui';

export const CollectionInterest = () => {
  return (
    <>
      <div className="text-white mb-2">I interested in...</div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-3">
          <ActionCard />
        </div>
        <div className="col-span-3">
          <ActionCard />
        </div>
        <div className="col-span-2">
          <ActionCard />
        </div>
        <div className="col-span-2">
          <ActionCard />
        </div>
        <div className="col-span-2">
          <ActionCard />
        </div>
      </div>
    </>
  );
};
