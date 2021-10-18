import { BadgeCheckIcon, BookmarkAltIcon } from '@heroicons/react/solid';

export interface ShadowCardBottomProps {
  bookmarkersCount: number;
  readersCount: number;
}

export function ShadowCardBottom({ bookmarkersCount, readersCount }: ShadowCardBottomProps) {
  return (
    <div className="flex text-xs pt-4">
      <div className="hidden sm:flex mr-1 flex-shrink-0">
        <div>Jul 1, 2020</div>
        <div className="ml-1">&#183;</div>
      </div>
      <div className="flex items-center mr-1">
        <BookmarkAltIcon className="w-3 h-3" />
        <div className="ml-1 flex items-center">
          {bookmarkersCount} <div className="hidden md:block ml-1">marks</div>
        </div>
        <div className="ml-1">&#183;</div>
      </div>
      <div className="flex items-center">
        <BadgeCheckIcon className="w-3 h-3" />
        <div className="ml-1 flex items-center">
          {readersCount} <div className="hidden md:block ml-1">reads</div>
        </div>
      </div>
    </div>
  );
}
