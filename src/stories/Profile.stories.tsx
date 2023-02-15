import { Story, Meta } from '@storybook/react'; 
import Profile, { ProfileProps } from '../app/components/Profile/Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
} as Meta
;
const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Clarissa Xavier',
  description: 'front-end developer há 1 ano', 
};