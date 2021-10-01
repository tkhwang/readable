import Link from 'next/link';

export interface MainSidebarProps {}

export function MainSidebar(props: MainSidebarProps) {
  return (
    <>
      <div>Explore</div>
      <div className="mt-8">
        <Link href="/collection">
          <a>My Page</a>
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/mvpSearch">
          <a>Search (MVP)</a>
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/mvpTag">
          <a>Tag (MVP)</a>
        </Link>
      </div>
    </>
  );
}

export default MainSidebar;
