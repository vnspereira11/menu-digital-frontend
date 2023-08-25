import { FiSearch, FiX } from "react-icons/fi";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

import { Input } from "../Input";
import { Footer } from "../Footer";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  const { user, signOut } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <header>
        <button type="button" onClick={() => setMenuIsVisible(false)}>
          <FiX />
        </button>
        <span>Menu</span>
      </header>
      <main>
        <div>
          <Input
            type="search"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>
        <nav>
          <ul>
            {isAdmin ? (
              <li>
                <Link to="/new">Novo prato</Link>
              </li>
            ) : null}
            <li>
              <Link onClick={signOut}>Sair</Link>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </Container>
  );
}
