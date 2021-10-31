import { Meta, Story } from '@storybook/react';
import { GroupCard, GroupCardProps } from './group-card';
import { SmallGroupCard } from './small-group-card';
import cardPreview from '../../../../.storybook/assets/card_cover_default.svg';

export default {
  title: 'Card/GroupCard',
  component: GroupCard,
} as Meta;

const Template: Story<GroupCardProps> = args => (
  <div className="border-2 border-dashed">
    <GroupCard {...args} />
  </div>
);

const SmTemplate: Story<GroupCardProps> = args => (
  <div className="w-80 h-80 border-2 border-dashed">
    <SmallGroupCard {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  groupCardTitle: 'UX Design',
  bookmarkCount: 540,
  previewImageUrlList: [cardPreview, cardPreview, cardPreview],
  bookmarkTitles: [
    {
      key: '1',
      bookmarkTitle:
        'A designer’s guide to user interview UX reviews: a template for success Sample CSS for Notification Badges',
    },
    {
      key: '2',
      bookmarkTitle:
        'A designer’s guide to user interview UX reviews: a template for success Sample CSS for Notification Badges',
    },
    {
      key: '3',
      bookmarkTitle:
        'A designer’s guide to user interview UX reviews: a template for success Sample CSS for Notification Badges',
    },
  ],
};

export const Small = SmTemplate.bind({});

Small.args = {
  groupCardTitle: 'UX Design',
  bookmarkCount: 540,
  previewImageUrlList: [cardPreview, cardPreview, cardPreview],
  bookmarkTitles: [
    {
      key: '1',
      bookmarkTitle:
        'A designer’s guide to user interview UX reviews: a template for success Sample CSS for Notification Badges',
    },
    {
      key: '2',
      bookmarkTitle:
        'A designer’s guide to user interview UX reviews: a template for success Sample CSS for Notification Badges',
    },
    {
      key: '3',
      bookmarkTitle:
        'A designer’s guide to user interview UX reviews: a template for success Sample CSS for Notification Badges',
    },
  ],
};
