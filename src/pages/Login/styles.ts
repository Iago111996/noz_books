import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-image: url("./image/background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  padding: 1rem;

  display: flex;
  /* align-items: center; */
  justify-content: flex-start;

  @media (max-width: 520px) {
    justify-content: center;
  }
`;

export const Content = styled.article`
  width: 368px;

  margin-left: 7rem;
  margin-top: 15rem;

  @media (max-width: 520px) {
    margin-left: 0;
  }

  @media (max-width: 320px) {
    width: 288px;
  }
`;

export const Header = styled.header`
  display: flex;

  margin-bottom: 3.4rem;

  h1 {
    color: var(--shape);

    font-style: normal;
    font-weight: 300;
    font-size: 1.75rem;

    line-height: 2.5rem;

    margin-left: 0.5rem;
  }
`;

export const WrapperInput = styled.section``;
