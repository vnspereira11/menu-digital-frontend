import { FiMenu } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

import Logo from "../../assets/polygon.svg";

import { OrderButton } from "../OrderButton";
import {
  Container,
  Menu,
  Brand,
  OrderSmall,
  Search,
  OrderLarge,
  Logout,
} from "./styles";

export function Header({ children }) {
  return (
    <Container>
      <Menu>
        <FiMenu />
      </Menu>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      <OrderSmall>
        <PiReceiptBold />
        <span>0</span>
      </OrderSmall>
      <Search>{children}</Search>
      <OrderLarge>
        <OrderButton
          type="button"
          icon={PiReceiptBold}
          title="Pedidos"
          amount={0}
        />
      </OrderLarge>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
