export interface TwoColumnsLayoutProps {
  renderHeader: () => JSX.Element;
  renderFirstColumn: () => JSX.Element;
  renderSecondColumn: () => JSX.Element;
  renderFooter: () => JSX.Element;
}

export function TwoColumnsLayout({
  renderHeader,
  renderFirstColumn,
  renderSecondColumn,
  renderFooter,
}: TwoColumnsLayoutProps) {
  return (
    <div className="max-w-7xl ml-auto mr-auto">
      <header className="pt-11 sticky top-0 z-10">{renderHeader()}</header>
      <main className="pt-7 grid grid-cols-12 gap-7 min-h-screen">
        <section className="sm:col-span-8 col-span-12">{renderFirstColumn()}</section>
        <section className="col-span-4">{renderSecondColumn()}</section>
      </main>
      <footer>{renderFooter()}</footer>
    </div>
  );
}
