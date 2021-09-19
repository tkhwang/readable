import { SearchIcon } from '@heroicons/react/solid';
import { Logo } from '@readable/ui';
import { HomeProfile } from './home-profile';

export const HomeHeader = () => {
  return (
    <div className="flex items-center py-8">
      <div className="max-w-sm px-8 w-1/5 hidden sm:block">
        <div className="w-full h-full min-w-max">
          <Logo />
        </div>
      </div>

      <div className="px-8 flex w-full items-center">
        <div className="w-full max-w-4xl">
          <div className="flex text-white font-semibold space-x-5">
            <div className="border-b-2">Following</div>
            <div>Recommand</div>
          </div>
        </div>

        <div className="pl-6 max-w-sm w-full">
          <div className="w-full flex space-x-4 justify-end">
            <div className="rounded-3xl bg-gray-700 p-3 items-center h-10 flex-1 hidden sm:flex">
              <input className="bg-gray-700 outline-none w-full" />
              <SearchIcon className="w-5 h-5 text-white" />
            </div>
            <HomeProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
