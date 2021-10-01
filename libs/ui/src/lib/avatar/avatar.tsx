import defaultImage from '../.././../assets/avatar_default.svg';

export interface AvatarProps {
  profileImage?: any;
}

export function Avatar({ profileImage }: AvatarProps) {
  return (
    <div className="rounded-full overflow-hidden">
      <img src={profileImage ?? '/images/avatar/avatar_default.svg'} alt="profile" className="w-10 h-10" />
    </div>
  );
}

export default Avatar;
