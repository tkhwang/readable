import { ArrowCircleRightIcon } from '@heroicons/react/solid';

export interface GroupCardHeaderProps {
  groupCardTitle: string;
  bookmarkCount: number;
}

export function GroupCardHeader({ groupCardTitle, bookmarkCount }: GroupCardHeaderProps) {
  return (
    <div className="flex items-baseline sm:flex-row sm:space-x-2 flex-col space-y-2">
      <div className="flex justify-between items-center sm:w-auto w-full">
        <div className="text-2xl font-semibold">{groupCardTitle}</div>
        <button className="sm:hidden block">
          <ArrowCircleRightIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="text-sm">{bookmarkCount} marks</div>
    </div>
  );
}
