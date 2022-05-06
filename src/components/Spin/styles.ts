import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Spiner = styled.div`
  width: 5rem;
  height: 5rem;

  border-radius: 2.5rem;
  border: 0.3rem solid var(--background-spin);
  border-left-color: var(--subtitle);

  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
