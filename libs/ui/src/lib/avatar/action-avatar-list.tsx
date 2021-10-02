import { Avatar } from '@readable/ui';

type User = {
  profileImage: string;
  userInfo: {
    nickname: string;
    job: string;
  };
};

export interface ActionAvatarListProps {
  userList: User[];
  direction: boolean;
}

export function ActionAvatarList({ userList, direction }: ActionAvatarListProps) {
  return (
    <div className="flex space-x-6">
      {userList.map(user => (
        <Avatar {...user} size="lg" />
      ))}
    </div>
  );
}
