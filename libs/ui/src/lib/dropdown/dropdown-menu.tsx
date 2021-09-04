import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AvatarProps } from '../avatar/avatar';

export interface DropdownMenuProps {
  renderMenuButton: () => JSX.Element;
  children: React.ReactChild | React.ReactChild[];
}

export function DropdownMenu({ renderMenuButton, children }: DropdownMenuProps) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>{renderMenuButton()}</Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownMenu;
