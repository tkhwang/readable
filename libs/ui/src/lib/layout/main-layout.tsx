export interface MainLayoutProps {
  renderHeader: () => JSX.Element;
  renderStickyArea?: () => JSX.Element;
  renderSidebar: () => JSX.Element;
  renderSection: () => JSX.Element;
  renderSectionSidebar?: () => JSX.Element;
  renderFooter?: () => JSX.Element;
}

export function MainLayout({
  renderHeader,
  renderStickyArea,
  renderSidebar,
  renderSection,
  renderSectionSidebar,
}: MainLayoutProps) {
  return (
    <>
      <header className="bg-gray-800">{renderHeader()}</header>
      <main className="bg-gray-800 min-h-screen">
        {renderStickyArea && (
          <div className="bg-gray-800 sticky top-0 z-10 border-b-2 border-gray-700">{renderStickyArea()}</div>
        )}
        <div className="grid sm:grid-cols-12 max-w-7xl mr-auto ml-auto">
          <aside className="relative z-20 col-span-3 hidden lg:block px-4 py-6">
            <div className="bg-black h-80 w-full"></div>
          </aside>
          <section className="col-span-8 lg:col-span-6 px-4 py-6">
            <article>{renderSection()}</article>
          </section>
          <section className="col-span-4 lg:col-span-3 px-4 py-6 hidden sm:block">
            {renderSectionSidebar && <>{renderSectionSidebar()}</>}
          </section>
        </div>
      </main>
      <footer className="p-6 bg-gray-800">
        <div className="h-20 bg-gray-700"></div>
      </footer>
    </>
  );
}

export default MainLayout;
