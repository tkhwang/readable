import { Meta, Story } from '@storybook/react';
import { CollectionHeader, CollectionHeaderProps } from './collection-header';

export default {
  title: 'Header/CollectionHeader',
  component: CollectionHeader,
} as Meta;

const Template: Story<CollectionHeaderProps> = args => <CollectionHeader {...args} />;
export const Default = Template.bind({});
