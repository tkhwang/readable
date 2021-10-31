import { BookmarkIcon } from '@heroicons/react/solid';
import { Badge, ProfileBadge } from './profile-badge';

export interface ProfileDashboardProps {
  badges: Badge[];
}

export function ProfileDashboard({ badges }: ProfileDashboardProps) {
  return (
    <>
      <div className="md:hidden block py-4 w-3/5">
        <div className="py-4 px-3 leading-relaxed border-2 bg-indigo-700 border-black border-dashed shadow-offset-black text-xs">
          <div className="truncate">I have 3 Interests</div>
          <div className="truncate">I got 2,890 bookmarks </div>
          <div className="truncate">I read 1,598 readable</div>
        </div>
      </div>
      <div className="md:hidden flex justify-end space-x-1 w-2/5 ml-7">
        <ProfileBadge badges={badges} />
      </div>

      <div className="space-y-2 md:flex hidden flex-col p-7 justify-end text-right max-w-xs w-full ml-auto h-4/6 border-2 border-black border-dashed bg-indigo-700 shadow-offset-black">
        <BookmarkIcon className="w-5 h-5 ml-auto" />
        <div className="truncate">
          <span className="lg:inline hidden">I have </span>3 Interests
        </div>
        <div className="truncate">
          <span className="lg:inline hidden">I got </span>2,890 bookmarks{' '}
        </div>
        <div className="truncate">
          <span className="lg:inline hidden">I read </span>1,598 readable
        </div>
      </div>
    </>
  );
}
