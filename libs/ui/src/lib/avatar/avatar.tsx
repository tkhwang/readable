import Image from 'next/image';

export interface AvatarProps {
  profileImage: any;
}

export function Avatar({ profileImage }: AvatarProps) {
  return (
    <div className="rounded-full w-10 h-10 relative overflow-hidden">
      <Image src={profileImage} alt="profile image" layout="fill" />
    </div>
  );
}

export default Avatar;
