import { Container, Brand, Form } from "./style";
import Logo from "../../assets/polygon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
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
          />
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
          <Button title="Criar conta" loading />
          <a href="/">Já tenho uma conta</a>
        </Form>
      </main>
    </Container>
  );
}
