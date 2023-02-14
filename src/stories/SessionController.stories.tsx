import { Story, Meta } from "@storybook/react";
import {
  SessionController,
  SessionControllerProps,
} from "../components/SessionController";

export default {
  title: "Example/SessionController",
  component: SessionController,
} as Meta<SessionControllerProps>;

const Template: Story<SessionControllerProps> = (args) => (
  <SessionController {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Clarissa Carla Xavier da Silva Rosa",
  description: "front-end developer há 1 ano",
  onLogout: () => {}
};
