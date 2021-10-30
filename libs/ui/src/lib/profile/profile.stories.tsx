import { Meta, Story } from '@storybook/react';
import { Profile, ProfileProps } from './profile';
import dotPattern from '../../../.storybook/assets/dot_pattern.svg';
import profileSample from '../../../.storybook/assets/card_cover_default.svg';
import badgeImageSample from '../../../.storybook/assets/badge_1k.png';

export default {
  title: 'Profile/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = args => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundImageUrl: dotPattern,
  profileImageUrl: profileSample,
  badgeImageUrl: badgeImageSample,
};
