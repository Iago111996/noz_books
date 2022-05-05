import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import { Input } from "../../components/Input";
import { AuthContext } from "../../contexts/AuthContext";

import { Container, Content, Header, WrapperInput } from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      if (email === "") {
        alert("O email é obrigatório!");
        return;
      }

      if (password === "") {
        alert("A senha é obrigatório!");
        return;
      }

      setLoading(true);

      const isLogged = await auth.signin(email, password);

      if (isLogged) {
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
        alert("Algo deu errado!");
      }
    } catch (error: any) {
      alert(error);
      setLoading(false);
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

        <Alert />
      </Content>
    </Container>
  );
}
