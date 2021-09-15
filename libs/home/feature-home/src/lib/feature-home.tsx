import { HomeSidebar } from './home-sidebar';
import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';
import { useEffect, useState } from 'react';

export const FeatureHome = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 62 ? setTop(false) : setTop(true);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>
      <header className="p-4">
        <div className="border-2 h-8"></div>
      </header>
      <main className="min-h-screen flex bg-gray-800">
        <aside className="max-w-sm p-8 w-1/6 hidden sm:block">
          <div className="w-full h-full min-w-max text-white font-semibold">
            <HomeSidebar />
          </div>
        </aside>

        <section className="p-8 flex w-full">
          <article className="w-full max-w-screen-md">
            <HomeFeed />
          </article>

          <aside className="pl-6 w-2/3 hidden lg:block max-w-sm">
            <div className="w-full h-full">
              <div className="w-full h-52 bg-black"></div>
              <div className="w-full h-96 mt-3 bg-black"></div>
            </div>
          </aside>
        </section>
      </main>
      <footer className="p-6 bg-gray-300">
        {/* TODO(zlrlo): 가이드 레이아웃 제거 필요 */}
        <div className="border-2 border-red-300 h-20"></div>
      </footer>
    </>
  );
};
