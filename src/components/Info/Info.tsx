import styled from 'styled-components';
import Icon from "@mdi/react";
import { mdiInformation } from '@mdi/js'
import Paragraph from '../Typography/Paragraph';

export interface InfoProps {
  title: string;
  description: string;
}

export default function Info (props: InfoProps) {
  return (
    <InfoWrapper>
      <InfoInnerContent>
        <InfoIcon>
          <Icon 
            color="#09f"
            size="48px"
            path={mdiInformation}
          />
        </InfoIcon>
        <InfoMessages>
          <InfoTitle>{props.title}</InfoTitle>
          <Paragraph size={'default'}>{props.description}</Paragraph>
        </InfoMessages>
      </InfoInnerContent>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 373px;
  background-color: #f3f8fa;
`;

const InfoInnerContent = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`;

const InfoIcon = styled.div``;

const InfoMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
  color: #274060;
`;
