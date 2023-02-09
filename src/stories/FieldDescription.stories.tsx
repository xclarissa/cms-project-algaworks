import { ComponentStory, ComponentMeta } from '@storybook/react';
import FieldDescriptor from '../components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor
} as ComponentMeta<typeof FieldDescriptor>;

const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;

export const FieldDescription= Template.bind({});
FieldDescription.args = {
  description: 'data de nascimento',
  date: '26 de Dezembro de 1997 (22 anos)'
};

