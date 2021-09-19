import { HomeSidebar } from './home-sidebar';
import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';

export const FeatureHome = () => {
  return (
    <>
      <header className="bg-gray-800 fixed w-full z-10">
        <HomeHeader />
      </header>
      <main className="min-h-screen flex bg-gray-800 pt-28">
        <aside className="max-w-sm pl-16 w-1/5 hidden sm:block">
          <div className="w-full h-full min-w-max text-white font-semibold">
            <HomeSidebar />
          </div>
        </aside>

        <section className="px-8 flex w-full">
          <article className="max-w-4xl">
            <HomeFeed />
          </article>

          <aside className="pl-6 hidden w-full lg:block max-w-sm">
            <div className="w-full h-full">
              <div className="w-full h-52 bg-black"></div>
              <div className="w-full h-96 mt-3 bg-black"></div>
            </div>
          </aside>
        </section>
      </main>
      <footer className="p-6 bg-gray-800">
        <div className="h-20 bg-gray-700"></div>
      </footer>
    </>
  );
};
