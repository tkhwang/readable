import { Meta, Story } from '@storybook/react';
import { ShadowCard, ShadowCardProps } from './shadow-card';
import avatarDefaultImage from '../../../../.storybook/assets/avatar_default.svg';
import cardCoverDefaultImage from '../../../../.storybook/assets/card_cover_default.svg';
import logoDefaultImage from '../../../../.storybook/assets/logo_sample.svg';

export default {
  title: 'Card/ShadowCard',
  component: ShadowCard,
} as Meta;

const Template: Story<ShadowCardProps> = args => <ShadowCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  urlInfo: {
    title: 'Announcing Coinbase’s successful transition to React Native...',
    siteName: 'Siteinspire',
    description: 'Applications we design are becoming increasingly data-driven. The need for quality...',
    cardImageUrl: cardCoverDefaultImage,
    logoImageUrl: logoDefaultImage,
  },
  cardOwner: {
    profileImageUrl: avatarDefaultImage,
    name: '20min',
  },
  tags: [
    { id: '1', name: 'reactnative' },
    { id: '2', name: 'react' },
  ],
  bookmarkersCount: 2890,
  readersCount: 1594,
};
