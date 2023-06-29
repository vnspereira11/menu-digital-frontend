import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";
import { NavBarDesktopAdmin } from "../../components/NavBarDesktopAdmin";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";

export function DishDetails() {
  return (
    <Container>
      <NavBarDesktopAdmin>
        <SearchInput
          type="text"
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
      </NavBarDesktopAdmin>
    </Container>
  );
}
