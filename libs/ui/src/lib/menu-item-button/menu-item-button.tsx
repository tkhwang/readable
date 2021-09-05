export interface MenuItemButtonProps {
  active: boolean;
  renderIcon: () => JSX.Element;
  renderActiveIcon: () => JSX.Element;
  children: string;
  onClick: () => void;
}

export function MenuItemButton({ active, renderIcon, renderActiveIcon, children, onClick }: MenuItemButtonProps) {
  return (
    <button
      className={`${
        active ? 'text-white bg-indigo-500' : 'text-gray-900'
      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
      onClick={() => onClick()}
    >
      {active ? renderActiveIcon() : renderIcon()}
      {children}
    </button>
  );
}

export default MenuItemButton;
