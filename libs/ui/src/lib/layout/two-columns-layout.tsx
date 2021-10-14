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
        <main className="sm:grid sm:grid-cols-12 sm:gap-7 min-h-screen mt-4">
          {renderFirstColumn()}
          {renderSecondColumn()}
        </main>
      </div>
      <footer>{renderFooter()}</footer>
    </>
  );
}
