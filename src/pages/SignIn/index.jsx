import { Container, Brand, Form } from "./style";
import Logo from "../../assets/polygon.svg";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      <Form>
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
      </Form>
    </Container>
  );
}
