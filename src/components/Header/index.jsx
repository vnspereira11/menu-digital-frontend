import { PiReceiptBold } from "react-icons/pi";
import { FiMenu, FiLogOut } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import logo from "../../assets/polygon.svg";

import { Container, Menu, Brand, Busca, Buttons, Logout } from "./styles";

import { Button } from "../Button";
import { OrderButton } from "../OrderButton";

export function Header({ children, ...rest }) {
  const { user, signOut } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  return (
    <Container {...rest}>
      <Menu>
        <FiMenu />
      </Menu>
      <Brand>
        <div className="logo-wrapper">
          <img src={logo} alt="Polígono azul decorativo" />
          <p>food explorer</p>
        </div>
        {isAdmin && <span>admin</span>}
      </Brand>
      <Busca>{children}</Busca>
      <Buttons>
        {isAdmin ? (
          <Button title="Novo prato" className="button-desktop" />
        ) : (
          <OrderButton icon={PiReceiptBold} title="Pedidos" amount="0" />
        )}
      </Buttons>
      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
