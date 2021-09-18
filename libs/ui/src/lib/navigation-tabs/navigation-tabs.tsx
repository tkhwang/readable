/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useState } from 'react';

type Tabs = {
  href: string;
  tabName: string;
};

export type NavigationTabsProps = {
  tabs: Tabs[];
};

export function NavigationTabs({ tabs }: NavigationTabsProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <ul className="flex">
      {tabs.map(({ href, tabName }, index) => {
        return (
          <li key={tabName} className="-mb-px mr-1">
            <Link href={href}>
              <a
                className={`bg-white inline-block ${
                  index === selectedTabIndex && 'border-l border-t border-r rounded-t'
                } py-4 px-4`}
              >
                {tabName}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationTabs;
