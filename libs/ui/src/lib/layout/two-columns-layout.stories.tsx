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
  renderFirstColumn: () => <div className="border-2 border-dashed">firstColumn</div>,
  renderSecondColumn: () => <div className="border-2 border-dashed">secondColumn</div>,
  renderFooter: () => <div className="border-2 border-dashed">footer</div>,
};
