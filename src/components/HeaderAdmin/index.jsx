import { FiMenu } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

import { Logo } from "../Logo";
import { Button } from "../Button";
import { OrderButton } from "../OrderButton";

import { Container, Menu, Search, OrderLarge, Logout } from "./styles";

export function HeaderAdmin({ isAdmin, children }) {
  return (
    <Container>
      <Menu>
        <FiMenu />
      </Menu>
      <Logo isAdmin />
      <Search>{children}</Search>
      <OrderLarge>
        {isAdmin ? (
          <Button title="Novo prato" />
        ) : (
          <OrderButton title="Pedidos" amount="0" />
        )}
      </OrderLarge>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
