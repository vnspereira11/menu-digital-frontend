import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/polygon.svg";

import { Container, Menu, Brand } from "./styles";

export function NavBarMobileAdmin() {
  return (
    <Container>
      <nav>
        <Menu>
          <FiMenu />
        </Menu>
        <Brand>
          <img src={Logo} alt="" />
          <p>food explorer</p>
          <span>admin</span>
        </Brand>
      </nav>
    </Container>
  );
}
