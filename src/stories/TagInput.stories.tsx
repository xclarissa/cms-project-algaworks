import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { TagInput, TagInputProps } from "../components/TagInput";
import { Tag } from "react-tag-input";

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

export const VariousTags = Template.bind({});
VariousTags.args = {
  tags: [
    {id: '1', text: "javascript"},
    {id: '2', text: "c#"},
    {id: '3', text: "typescript"},
    {id: '4', text: "react"},
    {id: '5', text: "python"},
    {id: '6', text: "ruby"},
    {id: '7', text: "java"},
  ],
  placeholder: "Insira as tags deste post"
};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);


  return <TagInput placeholder="Insira as tags deste post" tags={tags} onAdd={(tag) => setTags(tags)} onDelete={() => setTags([])} />
}