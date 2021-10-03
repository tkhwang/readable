import { SearchIcon } from '@heroicons/react/solid';

// eslint-disable-next-line @typescript-eslint/ban-types
export type FormWithUnderlineProps = {};

export function FormWithUnderline() {
  return (
    <form className="w-full lg:max-w-sm">
      <div className="flex items-center border-b border-indigo-500">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search"
          aria-label="Search Keyword"
        />
        <button className="flex-shrink-0  py-1 px-2" type="button">
          <SearchIcon className="w-5 h-5 text-indigo-500" />
        </button>
      </div>
    </form>
  );
}
