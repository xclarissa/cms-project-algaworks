import styled from "styled-components";

export const Wrapper = styled.div`
  .ReactTags__selected {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .ReactTags__tag {
    background-color: #09f;
    color: #fff;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }

  .ReactTags__remove {
    width: 24px;
    height: 1em;
    color: #fff;
    background-color: transparent;
    border: 0;
    font-size: 1em;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ReactTags__tagInputField {
    color: #274060;
    background-color: transparent;
    border-radius: 0;
    width: 100%;
    padding: 4px 0;
    font-size: 1em;
    font-family: 'Lato', sans-serif;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
  }

`;
