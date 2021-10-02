import { Meta, Story } from '@storybook/react';
import { ActionAvatars, ActionAvatarsProps } from './action-avatars';
import profileImage from '../.././../assets/avatar_default.svg';

export default {
  title: 'Avatar/ActionAvatars',
  component: ActionAvatars,
} as Meta;

const Template: Story<ActionAvatarsProps> = args => <ActionAvatars {...args} />;

export const ColumnAvatar = Template.bind({});

ColumnAvatar.args = {
  avatars: [
    {
      id: '1',
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'column',
    },
    {
      id: '2',
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'column',
    },
    {
      id: '3',
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'column',
    },
  ],
};

export const RowAvatar = Template.bind({});

RowAvatar.args = {
  avatars: [
    {
      id: '1',
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'row',
    },
    {
      id: '2',
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'row',
    },
    {
      id: '3',
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'row',
    },
  ],
};
