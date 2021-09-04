import { Meta, Story } from '@storybook/react';
import { Slider, SliderProps } from './slider';

export default {
  title: 'Slider/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = args => <Slider {...args} />;

export const Default = Template.bind({});
