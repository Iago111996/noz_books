import React from "react";

import { Container } from "./styles";

interface ButtonIconProps {
  url: string;
  disable?: boolean;
  onClick: () => void;
  color?: string;
}

export function ButtonIcon({ url, disable, color, onClick }: ButtonIconProps) {
  return (
    <Container onClick={onClick} disabled={disable} color={color}>
      <img src={url} alt="Ícone de log out." />
    </Container>
  );
}
