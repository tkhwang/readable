import { Meta, Story } from '@storybook/react';
import { TwoColumnsLayout, TwoColumnsLayoutProps } from './two-columns-layout';

export default {
  title: 'Layout/TwoColumnsLayout',
  component: TwoColumnsLayout,
} as Meta;

const Template: Story<TwoColumnsLayoutProps> = args => <TwoColumnsLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderHeader: () => <div className="border-2 border-dashed">header</div>,
  renderFirstColumn: () => <div className="border-2 border-dashed sm:col-span-8 col-span-12">section1</div>,
  renderSecondColumn: () => <div className="border-2 border-dashed sm:col-span-4 sm:block hidden">section2</div>,
  renderFooter: () => <div className="border-2 border-dashed">footer</div>,
};
