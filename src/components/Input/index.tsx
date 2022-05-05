/* eslint-disable react/require-default-props */
import React from "react";
import { Button } from "../Button";

import { Container } from "./styles";

interface InputProps {
  title: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: React.SetStateAction<string>) => void;
  onClick?: () => void;
}

export function Input({
  title,
  type,
  placeholder,
  value,
  onChange,
  onClick,
}: InputProps) {
  return (
    <Container>
      <div>
        <span>{title}</span>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      {type === "password" && <Button onClick={onClick} />}
    </Container>
  );
}
