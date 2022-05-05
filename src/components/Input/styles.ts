import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: var(--background-secondary);
  backdrop-filter: blur(2px);

  margin-bottom: 1rem;

  border-radius: 4px;

  padding: 0.5em 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    width: 70%;
  }

  span {
    display: block;

    color: var(--shape);

    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    line-height: 16px;

    opacity: 0.5;

    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;

    background: transparent;

    border: none;

    outline: none;

    color: var(--shape);

    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    line-height: 24px;

    &::placeholder {
      color: var(--shape);
    }
  }

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;
