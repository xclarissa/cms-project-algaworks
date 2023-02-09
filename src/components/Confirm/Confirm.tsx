import styled from 'styled-components';
import Button from '../Button/Button';

export interface ConfirmProps {
  description: string;
}

export default function Confirm(props: ConfirmProps) {
  return (
    <ConfirmWrapper>
      <ConfirmContent>
        <Title>{props.description}</Title>
        <ButtonWrapper>
          <Button className="Danger" variant="danger" label="Não" />
          <Button variant="primary" label="Sim" />
        </ButtonWrapper>
      </ConfirmContent>
    </ConfirmWrapper>
  );
}

const ConfirmWrapper = styled.div`
  box-sizing: border-box;
  // ver altura e largura se é maior que a caixa ConfirmContent
  width: 229px;
  height: 106px;
  background-color: #f3f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 16px;
`;

const ConfirmContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 181px;
  height: 58px;
`;

const Title = styled.h3`
  font-size: 16px;
  color: #274060;
  font-weight: 700;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  /* width: 82px;
  height: 24px; */
  gap: 8px;
`;
