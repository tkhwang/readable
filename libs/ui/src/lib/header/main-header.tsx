/* eslint-disable jsx-a11y/anchor-is-valid */
import { SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../logo/logo';

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

  return (
    <>
      <div className="flex items-center justify-between flex-wrap p-6">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="mr-2">
            <Logo />
          </div>
          <span className="font-semibold text-xl tracking-tight">Readable</span>
        </div>

        {/* Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => toggleMenuDropdown()}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className={`w-full flex-grow ${menuDropdown ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          {/* Navigation */}
          <nav className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Explore
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              My Page
            </a>
            <Link href="/mvpSearch">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Search (MVP)</a>
            </Link>
            <Link href="/mvpTag">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Tag (MVP)</a>
            </Link>
          </nav>

          {/* Dropdown */}
          {children && (
            <div className="mr-8 hidden lg:block">
              <SearchIcon onClick={() => toggleSearchDropdown()} className="w-7 h-7 text-white" />
            </div>
          )}
          {renderProfileDropdown  && <div className="hidden lg:block">{renderProfileDropdown()}</div>}
        </div>
      </div>
      {children && searchDropdown && children({onClose: toggleSearchDropdown})}
    </>
  );
}
