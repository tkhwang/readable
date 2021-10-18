import { GroupCardContent } from './group-card-content';
import { GroupCardHeader } from './group-card-header';
import { GroupCardImage } from './group-card-image';

export interface GroupCardProps {
  previewImageUrlList: string[];
}

export function GroupCard({ previewImageUrlList }: GroupCardProps) {
  return (
    <div className="md:p-6 p-4 flex sm:flex-row flex-col justify-between sm:h-auto h-full sm:space-y-0 space-y-20 sm:space-x- space-x-0">
      <div className="flex-1 flex flex-col justify-between">
        <GroupCardHeader />
        <GroupCardContent />
      </div>
      <div className="sm:flex-1 sm:flex sm:justify-end">
        <GroupCardImage previewImageUrlList={previewImageUrlList} />
      </div>
    </div>
  );
}
