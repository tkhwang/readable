import { ResponsiveHeader, SearchDropdownMenuProps } from '@readable/ui';
import { HomeProfile } from './home-profile';
import { SearchDropdownMenu } from './home-search-dropdown-menu';

export const HomeHeader = () => {
  return (
    <ResponsiveHeader renderProfileDropdown={() => <HomeProfile />}>
      {({ onClose }: SearchDropdownMenuProps) => {
        return <SearchDropdownMenu onClose={onClose} />;
      }}
    </ResponsiveHeader>
  );
};
