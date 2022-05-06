import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding-bottom: 1rem;

  position: relative;
`;

export const Content = styled.article`
  width: 85%;

  padding-top: 2.7rem;

  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const WrapperLogo = styled.section`
  display: flex;
  align-items: flex-end;

  h1 {
    color: var(--title);

    font-style: normal;
    font-weight: 300;
    font-size: 1.75rem;

    line-height: 1rem;

    margin-left: 0.7rem;
  }
`;

export const WrapperUser = styled.section`
  display: flex;
  align-items: center;

  h1 {
    color: var(--title);

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    line-height: 1rem;

    margin-right: 1rem;

    span {
      color: var(--title);

      font-style: normal;
      font-weight: 500;
      font-size: 1rem;

      line-height: 1rem;
    }
  }

  @media (max-width: 520px) {
    h1 {
      display: none;
    }

    p {
      display: none;
    }
  }
`;

export const Main = styled.main`
  width: 100%;

  margin: 2.3rem 0;

  section {
    min-height: 32rem;

    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));

    margin-bottom: 1rem;
  }

  footer {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    p {
      color: var(--title);

      font-style: normal;
      font-weight: 500;
      font-size: 0.8rem;

      line-height: 1.25rem;

      margin-right: 1rem;
    }

    div {
      margin-right: 1rem;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;
