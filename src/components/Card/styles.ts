import styled from "styled-components";

export const Container = styled.button`
  min-width: 17rem;
  max-height: 10rem;

  background-color: var(--shape);

  box-shadow: 0px .4rem 1.5rem rgba(84, 16, 95, 0.13);

  border: none;
  border-radius: 4px;

  outline: none;

  padding: 1rem;

  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 5rem;
    height: 7.7rem;
  }

  aside {
    height: 7.7rem;
    width: calc(100% - 6rem);
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: left;

    h1 {
      color: var(--title);

      font-style: normal;
      font-weight: 500;
      font-size: .9rem;

      line-height: 1rem;
    }

    h2 {
      color: var(--subtitle);
      font-style: normal;
      font-weight: 400;
      font-size: .75rem;

      line-height: 1rem;
    }

    span {
      display: block;

      color: var(--text);

      font-style: normal;
      font-weight: 400;
      font-size: .75rem;
    }
  }

  &:hover {
    transform: translateY(-1px);
  }
`;
