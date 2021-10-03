// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsWithUnderlineProps {}

export function TabsWithUnderline(props: TabsWithUnderlineProps) {
  return (
    <div className="text-sm">
      <a href="#responsive-header" className="inline-block text-gray-200 hover:text-white py-4 border-b-4 mr-4">
        Following
      </a>
      <a href="#responsive-header" className="inline-block text-gray-200 hover:text-white py-4 border-b-4 mr-4">
        Recommend
      </a>
    </div>
  );
}
