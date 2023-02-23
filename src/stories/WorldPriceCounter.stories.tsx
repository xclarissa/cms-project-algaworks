import { Story, Meta } from "@storybook/react";
import {
  WordPriceCounter,
  WorldPriceCounterProps,
} from "../app/components/WordPriceCounter";

export default {
  title: "Example/WorldPriceCounter",
  component: WordPriceCounter,
} as Meta<WorldPriceCounterProps>;

const Template: Story<WorldPriceCounterProps> = (args) => (
  <WordPriceCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  wordsCount: 20,
  pricePerWord: 0.60
};
