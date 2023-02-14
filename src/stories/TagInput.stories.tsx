import { Story, Meta } from "@storybook/react";
import { TagInput, TagInputProps } from "../components/TagInput";

export default {
  title: "Example/TagInput",
  component: TagInput,
} as Meta<TagInputProps>;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [{id: '', text: "javascript"}],
  placeholder: "Insira as tags deste post"
};
