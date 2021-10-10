/* eslint-disable jsx-a11y/anchor-is-valid */
import { SearchIcon } from '@heroicons/react/solid';
import { BookmarkIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Logo from '../logo/logo';
import { TabsWithUnderline } from '../navigation/tabs-with-underline';

export interface SearchDropdownMenuProps {
  onClose: () => void;
}

export interface MainHeaderProps {
  renderProfileDropdown?: () => JSX.Element;
  children?: (props: SearchDropdownMenuProps) => JSX.Element;
}

export function MainHeader({ renderProfileDropdown, children }: MainHeaderProps) {
  const [menuDropdown, setMenuDropdown] = useState<boolean>(false);
  const [searchDropdown, setSearchDropdown] = useState<boolean>(false);

  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
  };

  const toggleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };

  const renderButtonGroup = () => {
    return (
      <>
        <button onClick={() => toggleSearchDropdown()} className="hover:opacity-30">
          {children && <SearchIcon className="w-7 h-7" />}
        </button>
        <button className="hover:opacity-30">
          <BookmarkIcon className="w-7 h-7" />
        </button>
        <div>{renderProfileDropdown && <>{renderProfileDropdown()}</>}</div>
      </>
    );
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <button className="flex items-center flex-shrink-0 mr-6">
          <Logo />
        </button>

        <div className="flex items-center lg:hidden space-x-5">{renderButtonGroup()}</div>

        <nav className={`w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow lg:mt-0 mt-4">
            <TabsWithUnderline
              tabs={[
                { id: '1', name: 'Following' },
                { id: '2', name: 'Recommend' },
              ]}
            />
          </div>

          <div className="hidden lg:flex items-center space-x-7">{renderButtonGroup()}</div>
        </nav>
      </div>
      {children && searchDropdown && children({ onClose: toggleSearchDropdown })}
    </>
  );
}
