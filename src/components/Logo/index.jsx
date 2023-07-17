import logo from "../../assets/polygon.svg";

import { Container } from "./styles";

export function Logo({ isAdmin, ...rest }) {
  return (
    <Container {...rest}>
      <div className="logo-wrapper">
        <img src={logo} alt="Polígono azul decorativo" />
        <p>food explorer</p>
      </div>
      {isAdmin && <span>admin</span>}
    </Container>
  );
}
