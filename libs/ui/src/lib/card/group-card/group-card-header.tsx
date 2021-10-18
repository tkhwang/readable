import { ArrowCircleRightIcon } from '@heroicons/react/solid';

export interface GroupCardHeaderProps {}

export function GroupCardHeader(props: GroupCardHeaderProps) {
  return (
    <div className="flex items-baseline sm:flex-row sm:space-x-2 flex-col space-y-2">
      <div className="flex justify-between items-center sm:w-auto w-full">
        <div className="text-2xl font-semibold">UX Design</div>
        <button className="sm:hidden block">
          <ArrowCircleRightIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="text-sm">540 marks</div>
    </div>
  );
}
