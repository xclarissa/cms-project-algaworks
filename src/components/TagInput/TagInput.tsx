import * as TI from "./TagInput.styles";
import { WithContext as ReactTagInput, Tag } from "react-tag-input";

export interface TagInputProps {
  onAdd: (tag: Tag) => any;
  onDelete: (i: number) => any;
  tags: Tag[];
  placeholder: string;
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9
}

export function TagInput({ onAdd, onDelete, tags, placeholder}: TagInputProps) {
  

  return (
    <TI.Wrapper>
      <ReactTagInput
        placeholder={placeholder}
        handleAddition={onAdd}
        handleDelete={onDelete}
        allowDragDrop={false}
        autofocus={false}
        tags={tags}
        delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
      />
    </TI.Wrapper>
  );
}
