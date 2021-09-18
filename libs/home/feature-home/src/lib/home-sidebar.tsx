import Link from 'next/link';

export const HomeSidebar = () => {
  return (
    <>
      <div>Explore</div>
      <div className="mt-8">
        <Link href="/collection">
          <a>My Page</a>
        </Link>
      </div>
    </>
  );
};
