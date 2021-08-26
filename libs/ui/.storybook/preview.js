/* eslint-disable no-import-assign */
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;

addDecorator(withKnobs);

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});
