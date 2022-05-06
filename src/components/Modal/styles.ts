import styled from "styled-components";

interface Props {
  showModal: boolean;
}

export const Container = styled.main<Props>`
  width: 100%;
  height: 100%;

  background-color: var(--background-secondary);

  padding: 1rem;

  display: ${({ showModal }) => (showModal ? "block" : "none")};

  position: absolute;
  top: 0;
  right: 0;

  article {
    max-width: 48rem;
    min-height: 38rem;

    background-color: var(--shape);

    margin: 0 auto;
  }
`;

export const WrapperButton = styled.header`
  width: 100%;

  padding: 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
