import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import Button from "../components/Button/Button";
import { ImageUpload } from "../components/ImageUpload";
import Input from "../components/Input/Input";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { TagInput } from "../components/TagInput";
import { WordPriceCounter } from "../components/WordPriceCounter";
import countWordsInMarkdown from "../../utils/countWordsInMarkdown";
import info from "../../utils/info";

export default function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState("");

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    info({
      title: "Post salvo com sucesso!",
      description: "Você acabou de salvar um post",
    });
  }

  return (
    <PostFormWrapper onSubmit={handleSubmit}>
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
        <WordPriceCounter
          pricePerWord={0.25}
          wordsCount={countWordsInMarkdown(body)}
        />
        <Button label="salvar post" variant="primary" type="submit" />
      </PostFormSubmitWrapper>
    </PostFormWrapper>
  );
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
