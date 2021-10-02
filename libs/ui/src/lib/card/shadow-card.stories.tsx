import { Meta, Story } from '@storybook/react';
import { ShadowCard, ShadowCardProps } from './shadow-card';
import avatarDefaultImage from '../../../assets/avatar_default.svg';
import cardCoverDefaultImage from '../../../assets/card_cover_default.svg';

export default {
  title: 'Card/ShadowCard',
  component: ShadowCard,
} as Meta;

const Template: Story<ShadowCardProps> = args => <ShadowCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  profileImageUrl: avatarDefaultImage,
  cardImageUrl: cardCoverDefaultImage,
};
