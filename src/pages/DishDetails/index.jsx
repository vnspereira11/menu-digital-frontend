import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";
import { NavBarDesktop } from "../../components/NavBarDesktop";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";

export function DishDetails() {
  return (
    <Container>
      <NavBarDesktop>
        <SearchInput
          type="text"
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
      </NavBarDesktop>
    </Container>
  );
}
