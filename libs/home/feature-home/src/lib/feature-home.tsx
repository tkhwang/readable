import { HomeSidebar } from './home-sidebar';
import { HomeHeader } from './home-header';
import { HomeFeed } from './home-feed';

export const FeatureHome = () => {
  return (
    <>
      <header className="p-4">
        <HomeHeader />
      </header>
      <main className="min-h-screen bg-indigo-50 flex">
        <aside className="max-h-screen bg-indigo-100 p-8 hidden sm:flex sm:max-w-sm">
          {/* TODO(zlrlo): 가이드 레이아웃 제거 필요 */}
          <div className="w-60  border-2">헤더가 사라지면 fix되는 영역입니다. (아직 미구현)</div>
        </aside>
        <section className="flex">
          <article className="px-6 bg-gray-700">
            {/* TODO(zlrlo): 가이드 레이아웃 제거 필요 */}
            <div className="max-w-screen-xl lg:w-full">
              <HomeFeed />
            </div>
          </article>
          <aside className="bg-indigo-100 p-8 hidden lg:flex lg:max-w-xs">
            {/* TODO(zlrlo): 가이드 레이아웃 제거 필요 */}
            <div className="w-60 border-2">데탑 이상 사이즈가 아니라면 사라지는 영역입니다.</div>
          </aside>
        </section>
      </main>
      <footer className="p-6 bg-gray-300">
        {/* TODO(zlrlo): 가이드 레이아웃 제거 필요 */}
        <div className="h-20">footer 영역</div>
      </footer>
    </>
  );
};
