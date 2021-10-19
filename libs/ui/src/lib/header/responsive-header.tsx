import { SearchIcon } from '@heroicons/react/solid';
import { BookmarkIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Logo from '../logo/logo';
import { TabsWithUnderline } from '../navigation/tabs-with-underline';

export type SearchDropdownMenuProps = {
  onClose: () => void;
};

export interface ResponsiveHeaderProps {
  renderProfileDropdown?: () => JSX.Element;
  children?: (props: SearchDropdownMenuProps) => JSX.Element;
}

export function ResponsiveHeader({ renderProfileDropdown, children }: ResponsiveHeaderProps) {
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
          {children && <SearchIcon className="w-6 h-6" />}
        </button>
        <button className="hover:opacity-30">
          <BookmarkIcon className="w-6 h-6" />
        </button>
        <div>{renderProfileDropdown && <>{renderProfileDropdown()}</>}</div>
      </>
    );
  };

  return (
    <header className="box-content py-5 sm:px-6 px-3 max-w-7xl ml-auto mr-auto">
      <div className="flex items-center justify-between flex-wrap">
        <button className="flex items-center flex-shrink-0 mr-6">
          <Logo />
          <div className="text-lg font-bold ml-2">Readable</div>
        </button>

        <div className="flex items-center sm:hidden space-x-5">{renderButtonGroup()}</div>

        <nav className={`w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
          <div className="sm:flex-grow sm:mt-0 mt-4">
            <TabsWithUnderline
              tabs={[
                { id: '1', name: 'Following' },
                { id: '2', name: 'Recommend' },
              ]}
            />
          </div>

          <div className="hidden sm:flex items-center space-x-6">{renderButtonGroup()}</div>
        </nav>
      </div>
      {children && searchDropdown && children({ onClose: toggleSearchDropdown })}
    </header>
  );
}
