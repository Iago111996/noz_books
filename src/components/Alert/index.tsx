import React from "react";

import { Container } from "./styles";

interface AlertProps {
  title: string;
  isShow: boolean;
}

export function Alert({ title, isShow }: AlertProps) {
  return (
    <Container isShow={isShow}>
      <div />

      <h1>{title}</h1>
    </Container>
  );
}
