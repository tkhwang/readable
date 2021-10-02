import { Meta, Story } from '@storybook/react';
import { ColumnCard, ColumnCardProps } from './column-card';
import cardImage from '../../../assets/card_cover_default.svg';

export default {
  title: 'Card/ColumnCard',
  component: ColumnCard,
} as Meta;

const Template: Story<ColumnCardProps> = args => (
  <div className="w-80">
    <ColumnCard {...args} />
  </div>
);

export const SimpleCard = Template.bind({});

export const CardWithImage = Template.bind({});

CardWithImage.args = {
  cardImage,
};

export const NoBorder = Template.bind({});

NoBorder.args = {
  cardImage,
  noBorder: true,
};
