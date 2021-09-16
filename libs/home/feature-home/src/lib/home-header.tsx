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

  const { me, isMeDataError } = useMe();

  const gotToLoginPage = () => {
    router.push('./login');
  };

  const renderAvatarMenu = () => {
    if (!authenticated || isMeDataError) {
      return (
        <button
          className="font-medium text-sm text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
    <div className="flex items-center py-4">
      <div className="max-w-sm px-8 w-1/6 hidden sm:block">
        <div className="w-full h-full min-w-max">
          <Logo />
        </div>
      </div>

      <div className="px-8 flex w-full items-center">
        <div className="w-full max-w-screen-md">
          <div className="flex text-white font-semibold space-x-5">
            <div className="border-b-2">Following</div>
            <div>Recommand</div>
          </div>
        </div>

        <div className="pl-6 w-2/3 hidden lg:block max-w-sm">
          <div className="w-full h-full flex justify-between">
            <div className="rounded-2xl bg-gray-700 w-56"></div>
            <div>{renderAvatarMenu()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
