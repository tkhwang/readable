import Image from 'next/image';
import { Badge, ProfileBadge } from './profile-badge';
export interface ProfileCardProps {
  profileImageUrl: string;
  badges: Badge[];
}

export function ProfileCard({ profileImageUrl, badges }: ProfileCardProps) {
  const followRenderer = () => {
    return (
      <div className="flex justify-between">
        <div className="flex space-x-9">
          <div className="flex flex-col">
            <div className="text-xs">follower</div>
            <div>999</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs">follower</div>
            <div>999</div>
          </div>
        </div>

        <div className="border-1 border-black text-xs px-4 py-2 rounded-3xl">Follwer</div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white shadow-offset-black p-5 text-black">
        <div className="flex space-x-5">
          <Image src={profileImageUrl} width={128} height={128} objectFit="cover" />

          <div className="flex flex-col justify-between w-full">
            <div>
              <div className="text-2xl font-bold">@20min</div>
              <div className="text-xs">Product designer at @Readable</div>
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
