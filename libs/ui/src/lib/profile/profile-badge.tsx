import Image from 'next/image';

export type Badge = {
  imageUrl: string;
};
export interface ProfileBadgesProps {
  badges: Badge[];
}

export function ProfileBadge({ badges }: ProfileBadgesProps) {
  const [firstBadge, secondBadge] = badges;

  return (
    <>
      <div>
        <Image src={firstBadge.imageUrl} width={64} height={96} objectFit="cover" />
      </div>
      <div>
        <Image src={secondBadge.imageUrl} width={64} height={96} objectFit="cover" />
      </div>
    </>
  );
}
