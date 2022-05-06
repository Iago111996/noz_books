/* eslint-disable no-unneeded-ternary */
import styled from "styled-components";

interface Props {
  color?: string;
}

export const Container = styled.button<Props>`
  width: 2rem;
  height: 2rem;

  background-color: ${({ color }) => (color ? color : "var(--background)")};

  border-radius: 1rem;
  border: 1px solid var(--text);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
