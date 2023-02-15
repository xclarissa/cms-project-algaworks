import { Story, Meta } from "@storybook/react";
import { ErrorDisplay, ErrorDisplayProps } from "../app/components/ErrorDisplay";

export default {
  title: "Example/ErrorDisplay",
  component: ErrorDisplay,
  argTypes: {
    small: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<ErrorDisplayProps>;

const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  small: false,
  title: "Erro ao recuperar componente",
  message: "Código de erro que seja identificável pelo time de desenvolvimento",
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  title: "Erro ao recuperar componente",
  message: "Código de erro que seja identificável pelo time de desenvolvimento",
};

export const CustomTitle = Template.bind({})
CustomTitle.args = {
  title: 'Houve um erro'
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor'
}