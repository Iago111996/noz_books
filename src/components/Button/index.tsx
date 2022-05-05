/* eslint-disable react/require-default-props */
import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  onClick?: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      <h1>Entrar</h1>
    </Container>
  );
}
