import { PiReceiptBold } from "react-icons/pi";
import { FiMenu, FiLogOut } from "react-icons/fi";

import { Container, Menu, Busca, Buttons, Logout } from "./styles";

import { Logo } from "../Logo";
import { Button } from "../Button";
import { OrderButton } from "../OrderButton";

export function Header({ children, isAdmin, ...rest }) {
  return (
    <Container {...rest}>
      <Menu>
        <FiMenu />
      </Menu>
      <Logo />
      <Busca>{children}</Busca>
      <Buttons>
        {isAdmin ? (
          <Button title="Novo prato" />
        ) : (
          <OrderButton icon={PiReceiptBold} title="Pedidos" amount="0" />
        )}
      </Buttons>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
