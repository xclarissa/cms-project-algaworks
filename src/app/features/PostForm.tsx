import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import Button from "../components/Button/Button";
import { ImageUpload } from "../components/ImageUpload";
import Input from "../components/Input/Input";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { TagInput } from "../components/TagInput";
import { WorldPriceCounter } from "../components/WorldPriceCounter";
import countWordsInMarkdown from "../../utils/countWordsInMarkdown";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const navigate = useNavigate();
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");

  function handleClick() {
    // navigate("/");
  }

  return (
    <PostFormWrapper>
      <Input
        label="título"
        placeholder="e.g.: Como fiquei rico aprendendo React"
      />
      <ImageUpload label="Thumbnail do post" />
      <MarkdownEditor onChange={setBody} />
      <TagInput
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((_, i) => i !== index))}
        placeholder="Insira as tags deste post"
      />

      <PostFormSubmitWrapper>
        <WorldPriceCounter
          pricePerWord={0.25}
          wordsCount={countWordsInMarkdown(body)}
        />
        <Button label="salvar post" variant="primary" onClick={handleClick} />
      </PostFormSubmitWrapper>
    </PostFormWrapper>
  );
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostFormSubmitWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`;
