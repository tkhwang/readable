import { HomeSidebar } from './home-sidebar';

export const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
        <HomeSidebar></HomeSidebar>
        <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
          <h1 className="text-3xl md:text-5xl mb-4 font-extrabold" id="home">
            All activity
          </h1>
        </main>
      </div>
    </>
  );
};
