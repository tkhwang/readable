import Image, { ImageLoaderProps } from 'next/image';
import { DEFAULT_PROFILE_IMAGE_URL } from '../../const';

export type AvatarIconSize = 'xs' | 'sm' | 'base' | 'lg';

export interface AvatarIconProps {
  profileImage?: string;
  size?: AvatarIconSize;
}

export function AvatarIcon({ profileImage, size }: AvatarIconProps) {
  const avatarIconSize: { [key in AvatarIconSize]: string } = {
    xs: 'w-5 h-5',
    sm: 'w-8 h-8',
    base: 'w-10 h-10',
    lg: 'w-11 h-11',
  };

  const avatarIconImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={`rounded-full overflow-hidden relative ${avatarIconSize[size ?? 'base']}`}>
      <Image
        src={profileImage || DEFAULT_PROFILE_IMAGE_URL}
        layout="fill"
        loader={avatarIconImageLoader}
        alt="Profile"
      />
    </div>
  );
}
