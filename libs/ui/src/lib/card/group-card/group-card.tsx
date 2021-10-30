import { GroupCardContent, GroupCardContentProps } from './group-card-content';
import { GroupCardHeader, GroupCardHeaderProps } from './group-card-header';
import { GroupCardImage, GroupCardImageProps } from './group-card-image';

export type GroupCardProps = GroupCardHeaderProps & GroupCardImageProps & GroupCardContentProps;

export function GroupCard({ groupCardTitle, bookmarkCount, previewImageUrlList, bookmarkTitles }: GroupCardProps) {
  return (
    <div className="md:p-6 p-4 flex sm:flex-row flex-col justify-between sm:h-auto h-full sm:space-y-0 space-y-20 sm:space-x- space-x-0">
      <div className="flex-1 flex flex-col justify-between">
        <GroupCardHeader groupCardTitle={groupCardTitle} bookmarkCount={bookmarkCount} />
        <GroupCardContent bookmarkTitles={bookmarkTitles} />
      </div>
      <div className="sm:flex-1 sm:flex sm:justify-end">
        <GroupCardImage previewImageUrlList={previewImageUrlList} />
      </div>
    </div>
  );
}
