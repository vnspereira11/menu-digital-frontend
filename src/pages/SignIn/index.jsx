import { Container, Brand, Form } from "./style";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import Logo from "../../assets/polygon.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const data = useAuth();
  console.log("MEU CONTEXTO =>", data);

  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      <main>
        <Form>
          <h1>Faça login</h1>
          <Input
            id="email"
            type="text"
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            id="password"
            type="password"
            label="Senha"
            placeholder="No mínimo 6 caracteres"
          />
          <Button title="Entrar" loading />
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </main>
    </Container>
  );
}
