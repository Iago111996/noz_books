import React, { useState } from "react";
import { BookDetails } from "../../components/BookDetails";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { Spin } from "../../components/Spin";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import {
  BookInterface,
  ReasponseApiInterface,
} from "../../interfaces/responseApiInterface";

import {
  Container,
  Content,
  Header,
  Main,
  WrapperLogo,
  WrapperUser,
} from "./styles";

export function Home() {
  const [pageIndex, setPageIndex] = useState(1);
  const [visibleModal, setVisibleModal] = useState(false);
  const [bookItem, setBookItem] = useState<BookInterface>({} as BookInterface);

  const { data } = useFetch<ReasponseApiInterface>(
    `/books?page=${pageIndex}&amount=12&category=biographies`
  );

  const { signout, user } = useAuth();
  const numberPages = data?.totalPages ? Math.ceil(data?.totalPages) : 1;

  function prev() {
    if (pageIndex > 1) {
      setPageIndex((prevValue) => prevValue - 1);
    }
  }

  function next() {
    if (numberPages && pageIndex < numberPages) {
      setPageIndex((prevValue) => prevValue + 1);
    }
  }

  function handleShowModal(item: BookInterface) {
    setBookItem(item);
    setVisibleModal(true);
  }

  return (
    <Container>
      <Content>
        <Header>
          <WrapperLogo>
            <img src="./image/logo_dark.svg" alt="Logo da empresa." />

            <h1>Books</h1>
          </WrapperLogo>

          <WrapperUser>
            <h1>
              Bem vindo,
              <span>{` ${user?.name}!`}</span>
            </h1>

            <ButtonIcon url="./image/log_out.svg" onClick={() => signout()} />
          </WrapperUser>
        </Header>

        <Main>
          <section>
            {!data ? (
              <Spin />
            ) : (
              data?.data.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    onClick={() => handleShowModal(item)}
                  />
                );
              })
            )}
          </section>
          <footer>
            <p>{`Página ${pageIndex} de ${numberPages}`}</p>

            <div>
              <ButtonIcon
                url="./image/arrow_left.svg"
                onClick={() => prev()}
                disable={pageIndex === 1}
              />
            </div>

            <ButtonIcon
              url="./image/arrow_right.svg"
              onClick={() => next()}
              disable={pageIndex === numberPages}
            />
          </footer>
        </Main>
      </Content>

      <Modal showModal={visibleModal} setShowModal={(e) => setVisibleModal(e)}>
        <BookDetails item={bookItem} />
      </Modal>
    </Container>
  );
}
