import { Meta, Story } from '@storybook/react';
import { SearchDropdownMenu, SearchDropdownMenuProps } from './search-dropdown-menu';

export default {
  title: 'Dropdown/SearchDropdownMenu',
  component: SearchDropdownMenu,
} as Meta;

const Template: Story<SearchDropdownMenuProps> = args => <SearchDropdownMenu {...args} />;

export const Default = Template.bind({});
