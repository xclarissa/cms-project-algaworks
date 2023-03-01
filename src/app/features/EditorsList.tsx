import { useEffect } from "react";
import styled from "styled-components"; 
import PostService from "../../sdk/services/Post.service";
import Profile from "../components/Profile/Profile";

export default function EditorsList() {
  
  useEffect(() => { 
    const post = PostService.getAllPosts({
      size: 20,
      page: 2,
      sort: ['id', 'asc']
    })
    console.log('postId', post)

  }, [])

  return (
    <EditorsListWrapper>
      <Profile editorId={1} name="Fernando Lima" description="editor há 2 anos" />
      <Profile editorId={2} name="Clarissa Xavier" description="desemvolvedora frontend há 2 anos" />
      <Profile editorId={3} name="Rafael Garcia" description="analista de testes há 5 anos" />
      <Profile editorId={4} name="Leonardo Ferreira" description="diretor de arte sênior" />
      <Profile editorId={5} name="Luis Fernando" description="desenvolvedor backend há 4 anos" />
      <Profile editorId={6} name="Daniel Cruz" description="tech lead" />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`