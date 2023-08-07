import { useState } from "react";

import { api } from "../../services/api";

import { Container, Brand, Form } from "./style";

import Logo from "../../assets/polygon.svg";

import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos.");
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      <main>
        <Form>
          <h1>Crie sua conta</h1>
          <Input
            id="name"
            type="text"
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button title="Criar conta" onClick={handleSignUp} />
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </main>
    </Container>
  );
}
