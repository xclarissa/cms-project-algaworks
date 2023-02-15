import { Story, Meta } from "@storybook/react";
import {
  WorldPriceCounter,
  WorldPriceCounterProps,
} from "../app/components/WorldPriceCounter";

export default {
  title: "Example/WorldPriceCounter",
  component: WorldPriceCounter,
} as Meta<WorldPriceCounterProps>;

const Template: Story<WorldPriceCounterProps> = (args) => (
  <WorldPriceCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  wordsCount: 20,
  pricePerWord: 0.60
};
