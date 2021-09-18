import guestImage from '../.././../assets/Fernando_Pidrilio.svg';

export interface AvatarProps {
  profileImage?: any;
}

export function Avatar({ profileImage }: AvatarProps) {
  return (
    <div className="rounded-full overflow-hidden">
      <img src={profileImage ?? guestImage} alt="profile" className="w-10 h-10" />
    </div>
  );
}

export default Avatar;
