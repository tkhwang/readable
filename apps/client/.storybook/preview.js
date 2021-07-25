import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import 'tailwindcss/tailwind.css';

addDecorator(withKnobs);

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
