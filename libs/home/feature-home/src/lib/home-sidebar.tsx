import { Ad, Nav } from '@readable/ui';
import { HomeProfile } from './home-profile';

export const HomeSidebar = () => {
  return (
    <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
      <HomeProfile />
      <Nav></Nav>
      <Ad></Ad>
    </div>
  );
};
