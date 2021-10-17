export interface GroupCardContentProps {}

export function GroupCardContent(props: GroupCardContentProps) {
  return (
    <div>
      <ul className="list-disc leading-normal text-sm sm:block hidden">
        <li>A designer’s guide to user interview</li>
        <div className="md:block hidden">
          <li>UX reviews: a template for success</li>
          <li>Sample CSS for Notification Badges</li>
        </div>
      </ul>
      <button className="py-2 px-4 bg-white text-black text-xs rounded-3xl md:mt-7 sm:mt-4 sm:block hidden">
        View list
      </button>
    </div>
  );
}
