import Logo from "../../assets/polygon.svg";
import { FiLogOut } from "react-icons/fi";
import { Container, Brand, NewItem, Logout } from "./styles";
import { Button } from "../Button";

export function NavBarDesktopAdmin({ children }) {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
        <span>admin</span>
      </Brand>
      {children}
      <NewItem>
        <Button title="Novo prato" />
      </NewItem>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
