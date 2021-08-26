import { NavigationTabs } from '@readable/ui';

export const CollectionNav = () => {
  return (
    <NavigationTabs
      tabs={[
        {
          href: '/',
          tabName: 'Overview',
        },
        {
          href: '/',
          tabName: 'Collections',
        },
        {
          href: '/',
          tabName: 'Schedule',
        },
        {
          href: '/',
          tabName: 'Reward',
        },
      ]}
    ></NavigationTabs>
  );
};
