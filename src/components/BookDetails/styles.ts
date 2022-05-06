import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  background-color: var(--shape);

  padding: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-between;

  overflow: auto;

  img {
    max-width: 22rem;
    height: 32rem;
  }

  aside {
    max-width: 22rem;
    height: 32rem;

    margin-left: 3rem;

    h1 {
      color: var(--title);

      font-style: normal;
      font-weight: 500;
      font-size: 28px;

      line-height: 40px;
    }

    h3 {
      color: var(--title);

      font-style: normal;
      font-weight: 500;
      font-size: 12px;

      line-height: 30px;
    }

    h4 {
      color: var(--subtitle);

      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      line-height: 20px;
    }

    span {
      color: var(--text);

      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      line-height: 20px;
    }

    p {
      color: var(--text);

      font-style: normal;
      font-weight: 400;
      font-size: 12px;

      line-height: 20px;

      padding-bottom: 3rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 1.5rem;
    }

    aside {
      margin-left: 0;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 15rem;
      height: 22rem;
    }
  }
`;

export const Title = styled.h2`
  color: var(--title);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  line-height: 28px;

  text-transform: uppercase;

  margin: 1.5rem 0 0.5rem 0;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperSpin = styled.div`
  width: 100%;
  height: 38rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
