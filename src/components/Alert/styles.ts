import styled from "styled-components";

interface Props {
  isShow: boolean;
}

export const Container = styled.article<Props>`
  width: 70%;
  
  background-color: var(--background-alert);
  backdrop-filter: blur(2px);
  
  border-radius: 0.5rem;
  
  padding: 1rem;
  
  position: relative;
  
  transition: opacity .3s ease;
  
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};

  div {
    background-color: var(--background-alert);

    padding: 0.5rem;

    position: absolute;
    top: -0.4rem;

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
