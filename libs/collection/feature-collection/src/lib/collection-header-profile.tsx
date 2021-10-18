import { useMe } from '@readable/shared/data-access-me';
import { AvatarIcon, DropdownMenu, MenuItemButton } from '@readable/ui';
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
import { clearAuthToken } from '@readable/shared/util-auth';
import router from 'next/router';

// TODO(zlrlo): UI 공통으로 분리하는 리팩토링 필요

export const CollectionHeaderProfile = () => {
  const { me, isMeDataLoading } = useMe({ redirectTo: '/login' });

  if (!me || isMeDataLoading) {
    return <>loading...</>;
  }

  const { avatarUrl } = me;

  const logout = () => {
    clearAuthToken();
    router.push('/login');
  };

  return (
    <div className="relative z-50">
      <DropdownMenu renderMenuButton={() => <AvatarIcon profileImage={avatarUrl} />}>
        <div className="px-1 py-1">
          <Menu.Item as="li">
            {({ active }) => (
              <MenuItemButton
                active={active}
                renderIcon={() => <UserOutlineIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                renderActiveIcon={() => <UserSolidIcon className="w-5 h-5 mr-2" aria-hidden="true" />}
                onClick={() => {
                  console.log('click');
                }}
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
                onClick={() => {
                  console.log('click');
                }}
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
                onClick={() => {
                  console.log('click');
                }}
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
                onClick={() => logout()}
              >
                Sign out
              </MenuItemButton>
            )}
          </Menu.Item>
        </div>
      </DropdownMenu>
    </div>
  );
};
