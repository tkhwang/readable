import { Meta, Story } from '@storybook/react';
import { MainLayout, MainLayoutProps } from './main-layout';

export default {
  title: 'Layout/MainLayout',
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = args => <MainLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderHeader: () => <div className="text-white p-4 border-2 border-dashed">header</div>,
  renderStickyArea: () => <div className="text-white p-4 border-2 border-dashed">sticky area</div>,
  renderSidebar: () => <div className="text-white p-4  w-full h-full border-2 border-dashed">sidebar</div>,
  renderSection: () => <div className="text-white p-4  w-full h-full border-2 border-dashed">section</div>,
  renderSectionSidebar: () => (
    <div className="text-white p-4 w-full h-full border-2 border-dashed">section sidebar</div>
  ),
  renderFooter: () => <div className="text-white p-4 w-full h-full border-2 border-dashed">footer</div>,
};
