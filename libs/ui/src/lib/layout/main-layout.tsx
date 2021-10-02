export interface MainLayoutProps {
  renderHeader: () => JSX.Element;
  renderSidebar: () => JSX.Element;
  renderSection: () => JSX.Element;
  renderSectionSidebar?: () => JSX.Element;
  renderFooter?: () => JSX.Element;
}

export function MainLayout({ renderHeader, renderSidebar, renderSection, renderSectionSidebar }: MainLayoutProps) {
  return (
    <>
      <header className="bg-gray-800 fixed w-full z-10">{renderHeader()}</header>
      <main className="min-h-screen flex bg-gray-800 pt-28">
        <aside className="max-w-sm pl-16 w-1/5 hidden sm:block">
          <div className="w-full h-full min-w-max text-white font-semibold">{renderSidebar()}</div>
        </aside>
        <section className="px-4 sm:px-8 flex w-full">
          <article className="max-w-4xl w-full">{renderSection()}</article>
          <aside className="pl-6 hidden w-full lg:block max-w-sm">
            <div className="w-full h-full">{renderSectionSidebar && renderSectionSidebar()}</div>
          </aside>
        </section>
      </main>
      <footer className="p-6 bg-gray-800">
        <div className="h-20 bg-gray-700"></div>
      </footer>
    </>
  );
}

export default MainLayout;
