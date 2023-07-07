import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";

export function DishDetails() {
  return (
    <Container>
      <HeaderAdmin>
        <SearchInput
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </HeaderAdmin>
    </Container>
  );
}
