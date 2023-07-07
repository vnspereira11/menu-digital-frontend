import { FiMenu } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

import Logo from "../../assets/polygon.svg";

import { Button } from "../Button";
import {
  Container,
  Menu,
  Brand,
  OrderSmall,
  Search,
  OrderLarge,
  Logout,
} from "./styles";

export function HeaderAdmin({ children }) {
  return (
    <Container>
      <Menu>
        <FiMenu />
      </Menu>
      <Brand>
        <div>
          <img src={Logo} alt="" />
          <p>food explorer</p>
        </div>
        <span>admin</span>
      </Brand>
      <Search>{children}</Search>
      <OrderLarge>
        <Button title="Novo prato" />
      </OrderLarge>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
