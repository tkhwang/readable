import profileImage from '../.././../assets/Fernando_Pidrilio.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps {}

export function Avatar(props: AvatarProps) {
  return <img src={profileImage} alt="profile" className="rounded-full w-10 h-10" />;
}

export default Avatar;
