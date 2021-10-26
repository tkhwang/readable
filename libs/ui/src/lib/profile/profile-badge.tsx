import Image from 'next/image';

export interface ProfileBedgeProps {
  bedgeImageUrl: string;
}

export function ProfileBedge({ bedgeImageUrl }: ProfileBedgeProps) {
  return (
    <>
      <div>
        <Image src={bedgeImageUrl} width={64} height={96} objectFit="cover" />
      </div>
      <div>
        <Image src={bedgeImageUrl} width={64} height={96} objectFit="cover" />
      </div>
    </>
  );
}
