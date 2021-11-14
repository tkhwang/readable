import Image, { ImageLoaderProps } from 'next/image';
import { Badge, ProfileBadge } from './profile-badge';
export interface ProfileCardProps {
  profileImageUrl: string;
  badges: Badge[];
}

export function ProfileCard({ profileImageUrl, badges }: ProfileCardProps) {
  const profileImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const followRenderer = () => {
    return (
      <div className="flex justify-between space-x-6 mt-4">
        <div className="flex lg:space-x-9 space-x-3">
          <div className="flex flex-col">
            <div className="text-xs">follower</div>
            <div>999</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs">follower</div>
            <div>999</div>
          </div>
        </div>

        <div className="border-1 border-black text-xs px-4 py-2 rounded-3xl">Follow</div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white shadow-offset-black p-5 text-black">
        <div className="flex space-x-5">
          <div className="min-w-10">
            <Image loader={profileImageLoader} src={profileImageUrl} width={128} height={128} objectFit="cover" />
          </div>

          <div className="flex flex-col justify-between w-full">
            <div>
              <div className="lg:text-2xl text-lg font-bold">@20min</div>
              <div className="text-xs line-clamp-1">Product designer at @Readable</div>
            </div>
            <div className="md:block hidden">{followRenderer()}</div>
          </div>
        </div>
        <div className="md:hidden block mt-10">{followRenderer()}</div>
      </div>

      <div className="md:flex hidden justify-end pr-5 space-x-1">
        <ProfileBadge badges={badges} />
      </div>
    </>
  );
}
