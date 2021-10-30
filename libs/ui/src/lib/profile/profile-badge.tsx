import Image from 'next/image';

export interface ProfileBadgeProps {
  badgeImageUrl: string;
}

export function ProfileBadge({ badgeImageUrl }: ProfileBadgeProps) {
  return (
    <>
      <div>
        <Image src={badgeImageUrl} width={64} height={96} objectFit="cover" />
      </div>
      <div>
        <Image src={badgeImageUrl} width={64} height={96} objectFit="cover" />
      </div>
    </>
  );
}
