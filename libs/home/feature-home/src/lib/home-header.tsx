import router from 'next/router';
import { useAuth } from '@readable/shared/data-access-auth';
import { useMe } from '@readable/shared/data-access-me';
import { Avatar, DropdownMenu, Logo, MenuItemButton } from '@readable/ui';
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

export const HomeHeader = () => {
  const { authenticated, logout } = useAuth();

  const { me } = useMe();

  const gotToLoginPage = () => {
    router.push('./login');
  };

  const renderAvatarMenu = () => {
    if (!authenticated) {
      return (
        <button
          className="font-medium text-sm text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
          onClick={() => gotToLoginPage()}
        >
          Sign in
        </button>
      );
    }

    if (me) {
      return (
        <DropdownMenu renderMenuButton={() => <Avatar profileImage={me?.avatarUrl} />}>
          <div className="px-1 py-1 ">
            <Menu.Item as="li">
              {({ active }) => (
                <MenuItemButton
                  active={active}
                  renderIcon={() => <UserOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  renderActiveIcon={() => <UserSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  onClick={() => {}}
                >
                  Your profile
                </MenuItemButton>
              )}
            </Menu.Item>

            <Menu.Item as="li">
              {({ active }) => (
                <MenuItemButton
                  active={active}
                  renderIcon={() => <BookmarkAltOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  renderActiveIcon={() => <BookmarkAltSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  onClick={() => {}}
                >
                  Your collections
                </MenuItemButton>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1 ">
            <Menu.Item as="li">
              {({ active }) => (
                <MenuItemButton
                  active={active}
                  renderIcon={() => <CogOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  renderActiveIcon={() => <CogSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  onClick={() => {}}
                >
                  Settings
                </MenuItemButton>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1 ">
            <Menu.Item as="li">
              {({ active }) => (
                <MenuItemButton
                  active={active}
                  renderIcon={() => <UserRemoveOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  renderActiveIcon={() => <UserRemoveSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                  onClick={logout}
                >
                  Sign out
                </MenuItemButton>
              )}
            </Menu.Item>
          </div>
        </DropdownMenu>
      );
    } else {
      return <div>loading...</div>;
    }
  };

  return (
    <div className="flex justify-between justify-items-center">
      <Logo />
      {renderAvatarMenu()}
    </div>
  );
};
