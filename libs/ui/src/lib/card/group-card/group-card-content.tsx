import { BookmarkAltIcon } from '@heroicons/react/solid';

export interface GroupCardContentProps {
  bookmarkTitles?: { key: string; bookmarkTitle: string }[];
}

export function GroupCardContent({ bookmarkTitles }: GroupCardContentProps) {
  return (
    <ul className="leading-normal text-sm">
      {bookmarkTitles?.map(({ key, bookmarkTitle }) => {
        return (
          <li className="max-w-xs flex" key={key}>
            <BookmarkAltIcon className="w-5 h-5 mr-4 flex-shrink-0" />
            <div className="line-clamp-1">{bookmarkTitle}</div>
          </li>
        );
      })}
    </ul>
  );
}
