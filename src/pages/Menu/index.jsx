import { FiX, FiSearch } from "react-icons/fi";
import { Container, MenuHeader } from "./styles";

import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

export function Menu() {
  return (
    <Container>
      <MenuHeader>
        <button>
          <FiX />
        </button>
        <span>Menu</span>
      </MenuHeader>
      <main>
        <nav>
          <Input
            id="search"
            type="search"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
          <ul>
            <li>
              <a href="#">Novo prato</a>
            </li>
            <li>
              <a href="#">Sair</a>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </Container>
  );
}
