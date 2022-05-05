import styled from "styled-components";

export const Container = styled.article`
  width: 15rem;

  background-color: var(--background-alert);
  backdrop-filter: blur(2px);

  border-radius: 0.5rem;

  padding: 1rem;

  position: relative;

  div {
    background-color: var(--background-alert);

    padding: .5rem;

    position: absolute;
    top: -.4rem;

    transform: rotate(45deg);
  }

  h1 {
    color: var(--shape);

    font-style: normal;
    font-weight: 700;
    font-size: 16px;

    line-height: 16px;
  }
`;
