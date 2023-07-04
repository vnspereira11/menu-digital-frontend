import Logo from "../../assets/polygon.svg";
import { PiReceiptBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { Container, Brand, Order, Logout } from "./styles";
import { OrderButton } from "../OrderButton";

export function NavBarDesktop({ children }) {
  return (
    <Container>
      <Brand>
        <img src={Logo} alt="" />
        <p>food explorer</p>
      </Brand>
      {children}
      <Order>
        <OrderButton icon={PiReceiptBold} title="Pedidos" amount={0} />
      </Order>
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
