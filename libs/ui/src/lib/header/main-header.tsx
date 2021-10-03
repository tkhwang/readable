import Link from 'next/link';
import { FormWithUnderline } from '../form/form-with-underline';
import Logo from '../logo/logo';

export type MainHeaderProps = {
  renderProfile: () => JSX.Element;
};

export function MainHeader({ renderProfile }: MainHeaderProps) {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="mr-2">
          <Logo />
        </div>
        <span className="font-semibold text-xl tracking-tight">Readable</span>
      </div>

      <div className="flex lg:hidden">
        <div className="mr-4">
          <FormWithUnderline />
        </div>
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="mr-4 hidden lg:block ">
          <FormWithUnderline />
        </div>
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Explore
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            My Page
          </a>
          <Link href="/mvpSearch">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Search (MVP)</a>
          </Link>

          <Link href="/mvpTag">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">Tag (MVP)</a>
          </Link>
        </div>
        <div className="mr-4">
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            New Readable
          </a>
        </div>
        <div className="hidden lg:block">{renderProfile()}</div>
      </div>
    </nav>
  );
}
