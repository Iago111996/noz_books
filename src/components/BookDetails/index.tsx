import React from "react";

import { useFetch } from "../../hooks/useFetch";

import { BookInterface } from "../../interfaces/responseApiInterface";
import { BookDetailsInterface } from "../../interfaces/bookDetailsInterface";

import { Container, Title, WrapperInfo, WrapperSpin } from "./styles";
import { Spin } from "../Spin";

interface BookDetailsProps {
  item: BookInterface;
}

export function BookDetails({ item }: BookDetailsProps) {
  const { data } = useFetch<BookDetailsInterface>(
    `/books/${item.id}`
  );

  if (!data) {
    return (
      <WrapperSpin>
        <Spin />
      </WrapperSpin>
    );
  }

  return (
    <Container>
      <img src={data.imageUrl} alt="Imagem da capa do livro" />

      <aside>
        <section>
          <h1>{data?.title}</h1>

          {item.authors.map((author) => {
            return <h4 key={author}>{author}</h4>;
          })}
        </section>

        <section>
          <Title>Informações</Title>
          <WrapperInfo>
            <h3>Páginas</h3>
            <span>{`${data?.pageCount} páginas`}</span>
          </WrapperInfo>

          <WrapperInfo>
            <h3>Editora</h3>
            <span>{`Editora ${data?.publisher}`}</span>
          </WrapperInfo>

          <WrapperInfo>
            <h3>Publicação</h3>
            <span>{data?.published}</span>
          </WrapperInfo>

          <WrapperInfo>
            <h3>Idioma</h3>
            <span>{data?.language}</span>
          </WrapperInfo>

          <WrapperInfo>
            <h3>Categoria</h3>
            <span>{data?.category}</span>
          </WrapperInfo>

          <WrapperInfo>
            <h3>ISBN-10</h3>
            <span>{`${data?.isbn10}`}</span>
          </WrapperInfo>

          <WrapperInfo>
            <h3>ISBN-13</h3>
            <span>{`${data?.isbn13}`}</span>
          </WrapperInfo>
        </section>

        <section>
          <Title>Resenha da editora</Title>
          <p>{`${data?.description}`}</p>
        </section>
      </aside>
    </Container>
  );
}
