import { useState } from 'react';

type Tab = {
  id: string;
  name: string;
};

export interface TabsWithUnderlineProps {
  tabs: Tab[];
}

export function TabsWithUnderline({ tabs }: TabsWithUnderlineProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ul className="text-lg font-bold flex space-x-5">
      {tabs.map(({ id, name }, index) => {
        return (
          <li key={id} onClick={() => handleTabClick(index)} className="group relative">
            <a href="#responsive-header" className={`inline-block ${selectedIndex !== index && 'opacity-30'}`}>
              {name}
            </a>
            <div
              className={`transition-colors ease-in-out duration-200 border-1 border-transparent group-hover:border-gray-200 absolute -bottom-1 w-full`}
            />
          </li>
        );
      })}
    </ul>
  );
}
