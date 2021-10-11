import Image, { ImageLoaderProps } from 'next/image';
import { DEFAULT_PROFILE_IMAGE_URL } from '../../const';
import { Button } from '../button/button';

export type AvatarSize = 'xs' | 'sm' | 'base' | 'lg';

type UserInfo = {
  nickname: string;
  description: string;
};

export type Direction = 'row' | 'column';

export interface AvatarProps {
  profileImage?: string;
  size?: AvatarSize;
  userInfo?: UserInfo;
  direction?: Direction;
  isActive?: boolean;
}

export function Avatar({ profileImage, size, userInfo, direction, isActive }: AvatarProps) {
  const avatarSize: { [key in AvatarSize]: string } = {
    xs: 'w-5 h-5',
    sm: 'w-8 h-8',
    base: 'w-10 h-10',
    lg: 'w-11 h-11',
  };

  const avatarImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const directionStyle = direction === 'row' ? 'flex-row space-x-2' : 'flex-col space-y-2`';

  return (
    <div className={`flex ${direction && directionStyle}`}>
      <div className="flex-profile">
        <div className={`rounded-full overflow-hidden`}>
          <Image
            src={profileImage ?? DEFAULT_PROFILE_IMAGE_URL}
            loader={avatarImageLoader}
            width={44}
            height={44}
            alt={`${userInfo?.nickname} Profile`}
          />
        </div>
      </div>

      {userInfo && (
        <div className="flex flex-col space-y-1 w-full">
          <div className="text-xs">@{userInfo.nickname}</div>
          <div className="flex flex-col space-y-2">
            <div className="text-gray-400 text-xs line-clamp-3 lg:line-clamp-4 break-words">{userInfo.description}</div>

            <div className="flex-shrink-0">
              <Button isActive={isActive}>{isActive ? 'following' : 'follow'}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
