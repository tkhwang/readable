import { MainHeader } from '@readable/ui';
import { HomeProfile } from './home-profile';

export const HomeHeader = () => {
  return <MainHeader renderHomeProfile={() => <HomeProfile />}></MainHeader>;
};
