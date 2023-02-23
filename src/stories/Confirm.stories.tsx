import { ComponentStory, ComponentMeta } from "@storybook/react";
import Confirm from "../app/components/Confirm/Confirm";

export default {
  title: "Example/Confirm",
  component: Confirm,
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => (
  <Confirm {...args} />
);

export const ConfirmModal = Template.bind({});
ConfirmModal.args = {
  title: "Deseja realmente sair?",
};
