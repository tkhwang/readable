import { ResponsiveHeader, SearchDropdownMenuProps } from '@readable/ui';
import { useEffect, useState } from 'react';
import { HomeProfile } from './home-profile';
import { SearchDropdownMenu } from './home-search-dropdown-menu';

export const HomeHeader = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div className={`sticky top-0 z-20 transition duration-300 ease-in-out ${!top && 'bg-customGray-darkest'}`}>
      <ResponsiveHeader renderProfileDropdown={() => <HomeProfile />}>
        {({ onClose }: SearchDropdownMenuProps) => {
          return <SearchDropdownMenu onClose={onClose} />;
        }}
      </ResponsiveHeader>
    </div>
  );
};
