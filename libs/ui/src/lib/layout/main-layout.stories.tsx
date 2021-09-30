import { Meta, Story } from '@storybook/react';
import { MainLayout, MainLayoutProps } from './main-layout';

export default {
  title: 'Layout/MainLayout',
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = args => <MainLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderHeader: () => <div>header</div>,
  renderSidebar: () => <div>sidebar</div>,
  renderSection: () => <div>section</div>,
  renderSectionSidebar: () => <div>section sidebar</div>,
  renderFooter: () => <div>footer</div>,
};
