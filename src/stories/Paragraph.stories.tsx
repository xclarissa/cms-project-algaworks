import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../app/components/Typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  children:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias debitis, tempore odio eos nisi quaerat, cumque, nulla perspiciatis nostrum dolor assumenda rerum eum voluptate sed aut. Totam, maiores dolorum? Similique.'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero et cupiditate reiciendis corrupti! Illum aliquam, necessitatibus autem optio, laborum quos omnis nihil similique laboriosam eos, tempore harum culpa ad?'
};
