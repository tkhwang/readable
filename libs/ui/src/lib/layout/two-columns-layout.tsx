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
    <>
      {renderHeader()}
      <div className="box-content sm:px-6 px-3 max-w-7xl ml-auto mr-auto">
        <main className="grid grid-cols-12 gap-7 min-h-screen mt-4">
          <section className="sm:col-span-8 col-span-12">{renderFirstColumn()}</section>
          <section className="sm:col-span-4 sm:block hidden">{renderSecondColumn()}</section>
        </main>
      </div>
      <footer>{renderFooter()}</footer>
    </>
  );
}
