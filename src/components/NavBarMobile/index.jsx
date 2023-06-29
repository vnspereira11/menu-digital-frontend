import { FiMenu } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import Logo from "../../assets/polygon.svg";

import { Container, Menu, Brand, Order } from "./styles";

export function NavBarMobile() {
  return (
    <Container>
      <nav>
        <Menu>
          <FiMenu />
        </Menu>
        <Brand>
          <img src={Logo} alt="" />
          <p>food explorer</p>
        </Brand>
        <Order>
          <PiReceiptBold />
          <span>0</span>
        </Order>
      </nav>
    </Container>
  );
}
