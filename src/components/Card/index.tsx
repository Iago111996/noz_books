import React from "react";
import { BookInterface } from "../../interfaces/responseApiInterface";

import { Container } from "./styles";

interface CardProps {
  item: BookInterface;
  onClick: () => void;
}

export function Card({ item, onClick }: CardProps) {
  return (
    <Container onClick={onClick}>
      <img src={item.imageUrl} alt="Imagem da capa do livro" />

      <aside>
        <div>
          <h1>{item.title}</h1>

          {item.authors.map((author) => {
            return <h2 key={author}>{author}</h2>;
          })}
        </div>

        <div>
          <span>{`${item.pageCount} páginas`}</span>
          <span>{`Editora ${item.publisher}`}</span>
          <span>{`Publicado em ${item.published}`}</span>
        </div>
      </aside>
    </Container>
  );
}
