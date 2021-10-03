import { TabsWithUnderline } from '@readable/ui';

export const HomeFeedFilter = () => {
  return (
    <div className="max-w-7xl ml-auto mr-auto grid grid-cols-12">
      <div className="col-span-3 hidden lg:block"></div>
      <div className="col-span-9 px-8">
        <TabsWithUnderline />
      </div>
    </div>
  );
};
