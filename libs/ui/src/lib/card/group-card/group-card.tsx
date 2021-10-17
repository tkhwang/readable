import { GroupCardContent } from './group-card-content';
import { GroupCardHeader } from './group-card-header';
import { GroupCardImage } from './group-card-image';

export interface GroupCardProps {}

export function GroupCard(props: GroupCardProps) {
  return (
    <div className="p-6 flex sm:flex-row flex-col justify-between sm:h-auto h-full">
      <div className="flex-1 flex flex-col justify-between">
        <GroupCardHeader />
        <GroupCardContent />
      </div>
      <div className="flex-1 flex justify-end">
        <GroupCardImage />
      </div>
    </div>
  );
}
