import { Meta, Story } from '@storybook/react';
import { Step, StepProps } from './step';

export default {
  title: 'Step/Step',
  component: Step,
} as Meta;

const Template: Story<StepProps> = args => <Step {...args} />;

export const Default = Template.bind({});
