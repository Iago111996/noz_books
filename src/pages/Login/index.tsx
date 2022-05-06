import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Alert } from "../../components/Alert";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/useAuth";

import { ErrorIterface } from "../../interfaces/errorIterface";

import { Container, Content, Header, WrapperInput } from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    hasError: false,
    error: "",
  } as ErrorIterface);

  const { signin } = useAuth();
  const navigate = useNavigate();

  function changeValues() {
    const handler = setTimeout(() => {
      setErrors({ hasError: false, error: "" });
    }, 3000);
    return () => {
      clearTimeout(handler);
    };
  }

  async function handleLogin() {
    try {
      if (email === "") {
        setErrors({ hasError: true, error: "O email é obrigatório!" });
        changeValues();
        return;
      }

      if (password === "") {
        setErrors({ hasError: true, error: "A senha é obrigatória!" });
        changeValues();
        return;
      }

      const isLogged = await signin(email, password);

      if (isLogged) {
        navigate("/home");
      } else {
        setErrors({ hasError: true, error: "Algo deu errado!" });
        changeValues();
      }
    } catch (error: any) {
      if ([401].some((x) => x === error.response.status)) {
        setErrors({ hasError: true, error: "Email e/ou senha incorretos." });
        changeValues();
      }

      if ([500].some((x) => x === error.response.status)) {
        setErrors({ hasError: true, error: "Infelizmente, algo deu errado." });
        changeValues();
      }
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <img src="./image/logo.svg" alt="Logo da empresa." />

          <h1>Books</h1>
        </Header>

        <WrapperInput>
          <Input
            title="Email"
            type="text"
            placeholder="books@appnoz.com.br"
            value={email}
            onChange={setEmail}
          />

          <Input
            title="Senha"
            type="password"
            placeholder="..............."
            value={password}
            onChange={setPassword}
            onClick={() => handleLogin()}
          />
        </WrapperInput>

        <Alert title={errors.error} isShow={errors.hasError} />
      </Content>
    </Container>
  );
}
