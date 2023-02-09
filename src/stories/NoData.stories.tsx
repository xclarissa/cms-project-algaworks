import NoData, { NoDataProps } from "../components/NoData/NoData";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Example/NoData",
  component: NoData,
} as Meta<typeof NoData>;

const Template: Story<typeof NoData> = (args) => <NoData {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  height: 240,
};
