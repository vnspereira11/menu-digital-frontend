import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PiReceiptBold } from "react-icons/pi";
import { FiMenu, FiLogOut } from "react-icons/fi";
import logo from "../../assets/polygon.svg";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Navbar,
  Brand,
  SearchBar,
  NewMeal,
  ShoppingCart,
  Logout,
} from "./styles";

import { MenuMobile } from "../MenuMobile";
import { Button } from "../Button";
import { OrderButton } from "../OrderButton";

export function Header({ children, ...rest }) {
  const { user, signOut } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();

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
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar>
        <button type="button" onClick={() => setMenuIsVisible(true)}>
          <FiMenu />
        </button>
      </Navbar>

      <Brand>
        <div className="logo-wrapper">
          <img src={logo} alt="Polígono azul decorativo" />
          <p>food explorer</p>
        </div>
        {isAdmin && <span>admin</span>}
      </Brand>

      <SearchBar>{children}</SearchBar>

      {isAdmin ? (
        <NewMeal>
          <Button title="Novo prato" onClick={handleNavigation} />
        </NewMeal>
      ) : null}

      {!isAdmin ? (
        <ShoppingCart>
          <OrderButton
            icon={PiReceiptBold}
            title="Pedidos"
            totalAmount={totalAmount}
          />
        </ShoppingCart>
      ) : null}

      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
