import { Meta, Story } from '@storybook/react';
import { HeaderCollection, HeaderCollectionProps } from './header-collection';

export default {
  title: 'Header/HeaderCollection',
  component: HeaderCollection,
} as Meta;

const Template: Story<HeaderCollectionProps> = args => <HeaderCollection {...args} />;
export const Default = Template.bind({});
