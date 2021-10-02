import { Meta, Story } from '@storybook/react';
import { ActionAvatarList, ActionAvatarListProps } from './action-avatar-list';
import profileImage from '../.././../assets/avatar_default.svg';

export default {
  title: 'Avatar/ActionAvatarList',
  component: ActionAvatarList,
} as Meta;

const Template: Story<ActionAvatarListProps> = args => <ActionAvatarList {...args} />;

export const Default = Template.bind({});

Default.args = {
  userList: [
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
    },
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
    },
    {
      profileImage,
      userInfo: {
        nickname: '20min',
        job: 'Designer',
      },
    },
  ],
};
