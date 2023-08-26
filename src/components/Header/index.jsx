import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FiMenu, FiLogOut } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import logo from "../../assets/polygon.svg";

import {
  Container,
  Menu,
  Brand,
  SearchBar,
  NewMeal,
  Cart,
  Logout,
} from "./styles";

import { MenuMobile } from "../MenuMobile";
import { Button } from "../Button";
import { OrderButton } from "../OrderButton";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Header({ children, ...rest }) {
  const { user, signOut } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();

  function handleNavigationToNew() {
    navigate("/new");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
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
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Menu onClick={() => setMenuIsVisible(true)}>
        <FiMenu />
      </Menu>
      <Brand>
        <div className="logo-wrapper">
          <img src={logo} alt="Polígono azul decorativo" />
          <p>food explorer</p>
        </div>
        {isAdmin ? <span>admin</span> : null}
      </Brand>
      <SearchBar>{children}</SearchBar>
      {isAdmin ? (
        <NewMeal>
          <Button title="Novo prato" onClick={handleNavigationToNew} />
        </NewMeal>
      ) : null}
      {!isAdmin ? (
        <Cart>
          <OrderButton
            icon={PiReceiptBold}
            totalAmount={totalAmount}
            title="Pedidos"
          />
        </Cart>
      ) : null}
      <Logout onClick={handleSignOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
