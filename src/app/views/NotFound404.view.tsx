import DefaultLayout from "../layouts/Default/Default.layout";
import NotFoundImg from "../../assets/not_found.svg";
import styled from "styled-components";
import Button from "../components/Button/Button";

export default function NotFound404() {
  return (
    <NotFoundWrapper>
      <span>Oops!</span>
      <h1>Não encontramos esta página</h1>
      <img src={NotFoundImg} alt="Página não encontrada" />
      <Button variant="primary" label="voltar para home" />
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  span {
    font-family: "Lato";
    font-weight: 500;
    font-size: 72px;
  }

  button {
    cursor: pointer;
  }
`;
