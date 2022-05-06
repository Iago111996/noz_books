import React, { ReactNode, SetStateAction } from "react";
import { ButtonIcon } from "../ButtonIcon";

import { Container, WrapperButton } from "./styles";

interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (value: SetStateAction<boolean>) => void;
}

export function Modal({ children, showModal, setShowModal }: ModalProps) {
  return (
    <Container showModal={showModal}>
      <WrapperButton>
        <ButtonIcon
          url="./image/close.svg"
          onClick={() => setShowModal(false)}
          color="var(--shape)"
        />
      </WrapperButton>

      <article>{children}</article>
    </Container>
  );
}
