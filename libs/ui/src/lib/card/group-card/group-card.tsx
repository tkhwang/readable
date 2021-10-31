import { GroupCardContent, GroupCardContentProps } from './group-card-content';
import { GroupCardHeader, GroupCardHeaderProps } from './group-card-header';
import { GroupCardImage, GroupCardImageProps } from './group-card-image';

export type GroupCardProps = GroupCardHeaderProps & GroupCardImageProps & GroupCardContentProps;

export function GroupCard({ groupCardTitle, bookmarkCount, previewImageUrlList, bookmarkTitles }: GroupCardProps) {
  return (
    <div className="md:p-6 p-4">
      <div className="flex sm:flex-row flex-col justify-between sm:h-auto h-full sm:space-y-0 space-y-20 sm:space-x-4 space-x-0">
        <div className="flex-1 flex flex-col justify-between">
          <GroupCardHeader groupCardTitle={groupCardTitle} bookmarkCount={bookmarkCount} />
          <div className="sm:block hidden lg:my-10 my-5 h-16">
            <GroupCardContent bookmarkTitles={bookmarkTitles} />
          </div>
        </div>
        <div className="sm:flex-1 sm:flex sm:justify-end">
          <GroupCardImage previewImageUrlList={previewImageUrlList} />
        </div>
      </div>
      <div>
        <button className="py-2 px-4 bg-white text-black text-xs rounded-3xl sm:block hidden">View list</button>
      </div>
    </div>
  );
}
