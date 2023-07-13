import { FiSearch } from "react-icons/fi";

import { Container, Form } from "./styles";

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { SearchInput } from "../../components/SearchInput";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Footer } from "../../components/Footer";

export function New() {
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
        <BackButton title="voltar" />
        <h1>Adicionar prato</h1>
        <Form>
          <Input
            id="img"
            type="file"
            label="Imagem do prato"
            placeholder="Selecione imagem"
          />
          <Input
            id="name"
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
          />
          <Input
            id="price"
            type="text"
            label="Preço"
            placeholder="Ex.: R$ 00,00"
          />
          <Textarea
            id="description"
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
