import { useState } from "react";

import { Container, Brand, Form } from "./style";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import Logo from "../../assets/polygon.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

 
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            type="password"
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" onClick={handleSignIn} />
          <Link to="/register">Criar uma conta</Link>
        </Form>
      </main>
    </Container>
  );
}
