import styled from "styled-components";

export const Container = styled.button`
  width: 5.3rem;

  background-color: var(--shape);

  border: none;
  border-radius: 2.7rem;

  padding: 0.5rem 1rem;

  cursor: pointer;

  color: var(--danger);

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  line-height: 1.25rem;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
