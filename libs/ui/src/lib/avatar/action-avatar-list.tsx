import { Avatar, AvatarSize, Direction } from '@readable/ui';

type AvatarInfo = {
  profileImage: string;
  userInfo: {
    nickname: string;
    job: string;
  };
  direction: Direction;
};

type ListDirection = 'column' | 'row';

export interface ActionAvatarListProps {
  avatarList: AvatarInfo[];
  listDirection: ListDirection;
  avatarSize?: AvatarSize;
}

export function ActionAvatarList({ avatarList, listDirection, avatarSize }: ActionAvatarListProps) {
  const listDirectionStyle = listDirection === 'row' ? 'flex-row space-x-6' : 'flex-col space-y-6';

  return (
    <div className={`flex ${listDirectionStyle}`}>
      {avatarList.map(user => (
        <Avatar {...user} size={avatarSize} />
      ))}
    </div>
  );
}
