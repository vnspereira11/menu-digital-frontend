import { FiSearch } from "react-icons/fi";

import dishImg from "../../assets/ravanello300.svg";
import {
  Container,
  Content,
  DishImage,
  DishData,
  DishTags,
  Edit,
} from "./styles";

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { SearchInput } from "../../components/SearchInput";
import { BackButton } from "../../components/BackButton";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function DishDetailsAdmin() {
  return (
    <Container>
      <HeaderAdmin>
        <SearchInput
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </HeaderAdmin>
      <main>
        <BackButton href="/" title="voltar" />
        <Content>
          <DishImage>
            <img src={dishImg} alt="" />
          </DishImage>
          <DishData>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <DishTags>
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </DishTags>
            <Edit>
              <Button title="Editar prato" />
            </Edit>
          </DishData>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
