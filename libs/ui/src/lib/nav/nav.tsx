import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full">
      <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
        <li className="py-2 hover:bg-indigo-300 rounded">
          <a className="truncate">
            <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" />
            <span className="hidden sm:inline">Home</span>
          </a>
        </li>
        <Link href="/collection">
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="truncate">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/gift.svg" className="w-7 sm:mx-2 mx-4 inline" />
              <span className="hidden sm:inline">My collection</span>
            </a>
          </li>
        </Link>
        <Link href="/feed">
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="truncate">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/gift.svg" className="w-7 sm:mx-2 mx-4 inline" />
              <span className="hidden sm:inline">Feed</span>
            </a>
          </li>
        </Link>
        <li className="py-2 hover:bg-indigo-300 rounded">
          <a className="truncate">
            <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" className="w-7 sm:mx-2 mx-4 inline" />
            <span className="hidden sm:inline">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
