import { FiSearch } from "react-icons/fi";
import { Container, Content } from "./styles";
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
      <Content>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ab
          tenetur sit perspiciatis assumenda aliquid hic odio voluptatem eum ut
          esse, provident nobis omnis dicta exercitationem harum! Magni,
          accusantium necessitatibus.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ab
          tenetur sit perspiciatis assumenda aliquid hic odio voluptatem eum ut
          esse, provident nobis omnis dicta exercitationem harum! Magni,
          accusantium necessitatibus.
        </p>
      </Content>
      <Footer />
    </Container>
  );
}
