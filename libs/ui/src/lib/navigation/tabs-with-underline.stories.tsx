import { Meta, Story } from '@storybook/react';
import { TabsWithUnderline, TabsWithUnderlineProps } from './tabs-with-underline';

export default {
  title: 'Navigation/TabsWithUnderline',
  component: TabsWithUnderline,
} as Meta;

const Template: Story<TabsWithUnderlineProps> = args => <TabsWithUnderline {...args} />;

export const Default = Template.bind({});
