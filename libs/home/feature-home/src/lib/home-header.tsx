import { Logo } from '@readable/ui';
import { HomeProfile } from './home-profile';

export const HomeHeader = () => {
  return (
    <div className="flex items-center py-4">
      <div className="max-w-sm px-8 w-1/6 hidden sm:block">
        <div className="w-full h-full min-w-max">
          <Logo />
        </div>
      </div>

      <div className="px-8 flex w-full items-center">
        <div className="w-full max-w-screen-md">
          <div className="flex text-white font-semibold space-x-5">
            <div className="border-b-2">Following</div>
            <div>Recommand</div>
          </div>
        </div>

        <div className="pl-6 w-2/3 hidden lg:block max-w-sm">
          <div className="w-full h-full flex justify-between">
            <div className="rounded-2xl bg-gray-700 w-56"></div>
            <HomeProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
