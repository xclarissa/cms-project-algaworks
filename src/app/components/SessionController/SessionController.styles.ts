import styled from "styled-components";
import { Wrapper as Button } from "../Button/Button.styles";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 183px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 12px;
  border: 1px solid #ccc;
  ${Button} {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
`;

export const Name = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #274060;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #274060;
`;
