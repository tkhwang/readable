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
  previewImageUrlList: [cardPreview, cardPreview, cardPreview],
};

export const Small = SmTemplate.bind({});

Small.args = {
  previewImageUrlList: [cardPreview, cardPreview, cardPreview],
};
