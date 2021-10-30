export interface GroupCardContentProps {
  bookmarkTitles?: { key: string; bookmarkTitle: string }[];
}

export function GroupCardContent({ bookmarkTitles }: GroupCardContentProps) {
  return (
    <div>
      <ul className="leading-normal text-sm sm:block hidden md:pt-14 pt-10 sm:pb-5 pb-3">
        {bookmarkTitles?.map(({ key, bookmarkTitle }) => {
          return (
            <p className="line-clamp-1" key={key}>
              {bookmarkTitle}
            </p>
          );
        })}
      </ul>
      <button className="py-2 px-4 bg-white text-black text-xs rounded-3xl sm:block hidden">View list</button>
    </div>
  );
}
