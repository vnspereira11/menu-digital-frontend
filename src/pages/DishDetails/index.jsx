import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Footer } from "../../components/Footer";

export function DishDetails() {
  return (
    <Container>
      <Header>
        <SearchInput
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </Header>
    </Container>
  );
}
