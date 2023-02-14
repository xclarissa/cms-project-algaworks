import styled from "styled-components";

export const Wrapper = styled.a`
  text-decoration: none;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  gap: 24px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    outline: 5px solid #0099ff;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #274060;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #274060;
`;
