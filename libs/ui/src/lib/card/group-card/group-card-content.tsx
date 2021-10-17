export interface GroupCardContentProps {}

export function GroupCardContent(props: GroupCardContentProps) {
  return (
    <div>
      <ul className="leading-normal text-sm sm:block hidden md:pt-14 pt-10 sm:pb-5 pb-3">
        <p className="line-clamp-1">A designer’s guide to user interview</p>
        <p className="line-clamp-1">UX reviews: a template for success</p>
        <p className="line-clamp-1">Sample CSS for Notification Badges</p>
      </ul>
      <button className="py-2 px-4 bg-white text-black text-xs rounded-3xl sm:block hidden">View list</button>
    </div>
  );
}
