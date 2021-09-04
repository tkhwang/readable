import { Meta, Story } from '@storybook/react';
import { Gallery, GalleryProps } from './gallery';

export default {
  title: 'Gallery/Gallery',
  component: Gallery,
} as Meta;

const Template: Story<GalleryProps> = args => <Gallery {...args} />;

export const Default = Template.bind({});
