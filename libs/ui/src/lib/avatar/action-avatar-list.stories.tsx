import { Meta, Story } from '@storybook/react';
import { ActionAvatarList, ActionAvatarListProps } from './action-avatar-list';
import profileImage from '../.././../assets/avatar_default.svg';

export default {
  title: 'Avatar/ActionAvatarList',
  component: ActionAvatarList,
} as Meta;

const Template: Story<ActionAvatarListProps> = args => <ActionAvatarList {...args} />;

export const ColumnAvatar = Template.bind({});

ColumnAvatar.args = {
  avatarList: [
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'column',
    },
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'column',
    },
    {
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
  avatarList: [
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'row',
    },
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'row',
    },
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
      direction: 'row',
    },
  ],
};
