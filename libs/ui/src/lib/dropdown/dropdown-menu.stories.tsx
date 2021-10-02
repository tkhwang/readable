import { Meta, Story } from '@storybook/react';
import { Avatar } from '../avatar/avatar';
import { DropdownMenu, DropdownMenuProps } from './dropdown-menu';
import { AvatarProps } from '../avatar/avatar';
import { Menu } from '@headlessui/react';
import {
  BookmarkAltIcon as BookmarkAltOutlineIcon,
  CogIcon as CogOutlineIcon,
  UserIcon as UserOutlineIcon,
  UserRemoveIcon as UserRemoveOutlineIcon,
} from '@heroicons/react/outline';
import {
  BookmarkAltIcon as BookmarkAltSolidIcon,
  CogIcon as CogSolidIcon,
  UserIcon as UserSolidIcon,
  UserRemoveIcon as UserRemoveSolidIcon,
} from '@heroicons/react/solid';
import profileImage from '../../../assets/avatar_default.svg';

export default {
  title: 'Dropdown/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps> = args => (
  <div className="flex justify-center">
    <DropdownMenu {...args}>
      <div className="px-1 py-1 ">
        <Menu.Item as="li">
          {({ active }) => (
            <button
              className={`${
                active ? 'text-white bg-indigo-500' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <UserSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <UserOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              Your profile
            </button>
          )}
        </Menu.Item>

        <Menu.Item as="li">
          {({ active }) => (
            <button
              className={`${
                active ? 'text-white bg-indigo-500' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <BookmarkAltSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <BookmarkAltOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              Your collections
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1 ">
        <Menu.Item as="li">
          {({ active }) => (
            <button
              className={`${
                active ? 'text-white bg-indigo-500' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <CogSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <CogOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              Settings
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1 ">
        <Menu.Item as="li">
          {({ active }) => (
            <button
              className={`${
                active ? 'text-white bg-indigo-500' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <UserRemoveSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <UserRemoveOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              Sign out
            </button>
          )}
        </Menu.Item>
      </div>
    </DropdownMenu>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  renderMenuButton: () => <Avatar profileImage={profileImage} />,
};
