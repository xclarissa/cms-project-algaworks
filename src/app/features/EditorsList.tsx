import styled from "styled-components";
import Profile from "../components/Profile/Profile";

export default function EditorsList() {
  return (
    <EditorsListWrapper>
      <Profile title="Fernando Lima" description="editor há 2 anos" />
      <Profile title="Clarissa Xavier" description="desemvolvedora frontend há 2 anos" />
      <Profile title="Rafael Garcia" description="analista de testes há 5 anos" />
      <Profile title="Leonardo Ferreira" description="diretor de arte sênior" />
      <Profile title="Luis Fernando" description="desenvolvedor backend há 4 anos" />
      <Profile title="Daniel Cruz" description="tech lead" />
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`