import { transparentize } from "polished";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import getEditorDescription from "../../sdk/utils/getEditorDescription";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export default function EditorProfile({
  hidePersonalData,
}: EditorProfileProps) {
  const [editor, setEditor] = useState<User.EditorDetailed>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    UserService.getExistingEditor(Number(params.id)).then(setEditor);
  }, [params.id]);

  if (!editor) {
    return null;
  }

  return (
    <EditorProfileWrapper>
      <EditorHeadline>
        <Avatar src={editor.avatarUrls.small} />
        <Name>{editor.name}</Name>
        <Description>
          {getEditorDescription(new Date(editor.createdAt))}
        </Description>
      </EditorHeadline>

      <Divisor />

      <DataWrapper>
        <ProfissionalInfo>
          <Biography>{editor.bio}</Biography>
          {editor.skills?.map((skill) => (
            <ProgressBar
              theme="primary"
              title={skill.name}
              progress={skill.percentage}
            />
          ))}
        </ProfissionalInfo>

        <PersonalInfo>
          <Address>
            <FieldDescriptor
              description="cidade:"
              date={editor.location.city}
            />
            <FieldDescriptor
              description="estado"
              date={editor.location.state}
            />
          </Address>

          {!hidePersonalData && (
            <>
              <FieldDescriptor
                description="telefone:"
                date="+55 27 91234-5678"
              />
              <FieldDescriptor
                description="email:"
                date="ana.castillo@redacao.algacontent.com"
              />
              <FieldDescriptor
                description="data de nascimento:"
                date="26 de Dezembro de 1997 (22 anos)"
              />
            </>
          )}
        </PersonalInfo>
      </DataWrapper>

      {!hidePersonalData ? (
        <Earnings>
          <ValueDescriptor
            color="default"
            description="palavras nesta semana"
            value={20_345}
          />
          <ValueDescriptor
            color="primary"
            description="ganhos na semana"
            value={560322.02}
            isCurrency
          />
          <ValueDescriptor
            color="default"
            description="palavras no mês"
            value={140_432}
          />

          <ValueDescriptor
            color="primary"
            description="ganhos no mês"
            value={560322.02}
            isCurrency
          />
          <ValueDescriptor
            color="default"
            description="Total de palavras"
            value={2_434_423}
          />
          <ValueDescriptor
            color="primary"
            description="ganhos sempre"
            value={560322.02}
            isCurrency
          />
        </Earnings>
      ) : (
        <></>
      )}
    </EditorProfileWrapper>
  );
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${transparentize(0.9, "#274060")};
`;

const EditorHeadline = styled.div`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-rows: 2;
  grid-template-columns: 48px auto;
  height: 48px;
`;

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`;

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`;

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`;

const Divisor = styled.div`
  border-bottom: 1px solid ${transparentize(0.9, "#274060")};
`;

const DataWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const ProfissionalInfo = styled.div`
  display: grid;
  gap: 16px;
`;

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;

const Address = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const PersonalInfo = styled.div`
  display: grid;
  gap: 16px;
`;

const Earnings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
