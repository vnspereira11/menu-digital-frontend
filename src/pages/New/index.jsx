import { FiSearch } from "react-icons/fi";

import { Container, Form } from "./styles";

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { SearchInput } from "../../components/SearchInput";
import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TagInput } from "../../components/TagInput";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

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
          <Select id="category" label="Categoria">
            <option value="meal">Refeição</option>
            <option value="dessert">Sobremesa</option>
            <option value="beverage">Bebida</option>
          </Select>
          <TagInput
            id="ingredients"
            label="Ingredientes"
            placeholder="Adicionar"
            isNew
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
          <Button loading title="Salvar alterações" />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
