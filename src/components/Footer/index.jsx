import Logo from "../../assets/polygon-light.svg";
import { Container, Brand } from "./styles";

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      <p>&copy; 2023 - Todos os direitos reservados</p>
    </Container>
  );
}
