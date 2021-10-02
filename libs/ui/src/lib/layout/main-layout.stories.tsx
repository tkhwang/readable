import { Meta, Story } from '@storybook/react';
import { MainLayout, MainLayoutProps } from './main-layout';

export default {
  title: 'Layout/MainLayout',
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = args => <MainLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderHeader: () => <div className="text-white">header</div>,
  renderSidebar: () => <div className="text-white">sidebar</div>,
  renderSection: () => <div className="text-white">section</div>,
  renderSectionSidebar: () => <div className="text-white">section sidebar</div>,
  renderFooter: () => <div className="text-white">footer</div>,
};
