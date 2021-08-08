import { HomeSidebar } from './home-sidebar';
import { Card } from '@readable/ui';
import { HomeHeader } from './home-header';

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
        <HomeSidebar></HomeSidebar>
        <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
          <h1 className="text-xl md:text-2xl mb-4 font-bold" id="home">
            All activity
          </h1>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </main>
      </div>
      <div className="w-full h-48 bg-gray-300"></div>
    </>
  );
};
