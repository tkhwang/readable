import { Avatar, AvatarSize, Direction } from '@readable/ui';

type AvatarInfo = {
  id: string;
  profileImage: string;
  userInfo: {
    nickname: string;
    job: string;
  };
  direction: Direction;
};

type ListDirection = 'column' | 'row';

export interface ActionAvatarsProps {
  avatars: AvatarInfo[];
  listDirection: ListDirection;
  avatarSize?: AvatarSize;
}

export function ActionAvatars({ avatars, listDirection, avatarSize }: ActionAvatarsProps) {
  const listDirectionStyle = listDirection === 'row' ? 'flex-row space-x-6' : 'flex-col space-y-6';

  return (
    <div className={`flex ${listDirectionStyle}`}>
      {avatars.map(user => (
        <Avatar key={user.id} {...user} size={avatarSize} />
      ))}
    </div>
  );
}
