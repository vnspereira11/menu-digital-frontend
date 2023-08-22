import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PiReceiptBold } from "react-icons/pi";
import { FiMenu, FiLogOut } from "react-icons/fi";
import logo from "../../assets/polygon.svg";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, Menu, Brand, Busca, Buttons, Logout } from "./styles";

import { Button } from "../Button";
import { OrderButton } from "../OrderButton";

export function Header({ children, ...rest }) {
  const { user, signOut } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();
  const params = useParams();

  function handleNavigation() {
    navigate("/new");
  }

  useEffect(() => {
    async function fetchTotalAmount() {
      const response = await api.get("/order_meals/show");
      setTotalAmount(response.data.totalAmount);
    }
    fetchTotalAmount();
  }, [totalAmount]);

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
          <Button
            title="Novo prato"
            className="button-desktop"
            onClick={handleNavigation}
          />
        ) : (
          <OrderButton
            icon={PiReceiptBold}
            title="Pedidos"
            totalAmount={totalAmount}
          />
        )}
      </Buttons>
      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
