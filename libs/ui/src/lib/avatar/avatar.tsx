import Image, { ImageLoaderProps } from 'next/image';
import { DEFAULT_PROFILE_IMAGE_URL } from '../../const';

export type AvatarSize = 'xs' | 'sm' | 'base' | 'lg';

type UserInfo = {
  nickname: string;
  job?: string;
};

export type Direction = 'row' | 'column';

export interface AvatarProps {
  profileImage?: string;
  size?: AvatarSize;
  userInfo?: UserInfo;
  direction?: Direction;
}

export function Avatar({ profileImage, size, userInfo, direction }: AvatarProps) {
  const avatarSize: { [key in AvatarSize]: string } = {
    xs: 'w-5 h-5',
    sm: 'w-8 h-8',
    base: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const avatarImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const directionStyle = direction === 'row' ? 'flex-row space-x-2' : 'flex-col space-y-2`';

  return (
    <div className={`flex ${direction && directionStyle} items-center`}>
      <div className={`rounded-full overflow-hidden relative w- ${avatarSize[size ?? 'base']}`}>
        <Image src={profileImage ?? DEFAULT_PROFILE_IMAGE_URL} layout="fill" loader={avatarImageLoader} alt="Profile" />
      </div>
      {userInfo && (
        <div className="flex flex-col items-center">
          <div className="text-white text-xs">@{userInfo.nickname}</div>
          {userInfo.job && <div className="text-gray-400 text-xs">{userInfo.job}</div>}
        </div>
      )}
    </div>
  );
}
