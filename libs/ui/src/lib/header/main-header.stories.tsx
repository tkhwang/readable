import { Meta, Story } from '@storybook/react';
import { MainHeader, MainHeaderProps } from './main-header';
import profileImage from '../.././../assets/avatar_default.svg';
import { Avatar } from '../avatar/avatar';

export default {
  title: 'Header/MainHeader',
  component: MainHeader,
} as Meta;

const Template: Story<MainHeaderProps> = args => <MainHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  renderProfile: () => <Avatar profileImage={profileImage} />,
};
