import { BookmarkIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { Avatar } from '../../avatar/avatar';
import { Hashtag } from '../../hashtag/hashtag';

export type CardOwner = {
  profileImageUrl?: string;
  name: string;
};

export type Tag = {
  id: string;
  name: string;
};

export interface ShadowCardHeaderProps {
  cardOwner: CardOwner;
  tags: Tag[];
}

export function ShadowCardHeader({ cardOwner, tags }: ShadowCardHeaderProps) {
  return (
    <div className="flex py-4 px-5 bg-customGray-dark justify-between items-center">
      <div className="flex items-center">
        <Avatar profileImage={cardOwner.profileImageUrl} size="xs" />
        <div className="ml-2 flex items-center text-xs flex-shrink-0">
          <div>@{cardOwner.name}</div>
          <div className="sm:block hidden text-gray-400 ml-1 flex-shrink-0">marked 10min ago</div>
        </div>
      </div>

      <div className="flex space-x-4 items-center">
        <div className="space-x-2 hidden lg:block">
          {tags?.slice(0, 2).map(({ id, name }) => {
            return <Hashtag key={id}>{name}</Hashtag>;
          })}
        </div>
        <div>
          <DotsVerticalIcon className="text-gray-400 w-5 h-5"></DotsVerticalIcon>
        </div>
        <div>
          <BookmarkIcon className="text-indigo-600 w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
