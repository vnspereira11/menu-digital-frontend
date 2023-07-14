import { FiSearch, FiUpload } from "react-icons/fi";

import { Container, Form } from "./styles";

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { SearchInput } from "../../components/SearchInput";
import { BackButton } from "../../components/BackButton";
import { FileInput } from "../../components/FileInput";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TagInput } from "../../components/TagInput";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { Footer } from "../../components/Footer";

export function Edit() {
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
        <h1>Editar prato</h1>
        <Form>
          <div className="image-wrapper">
            <p>Imagem do prato</p>
            <FileInput id="image" icon={FiUpload} label="Imagem do prato" />
          </div>
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
          <div className="ingredients-wrapper">
            <TagInput
              id="ingredients"
              label="Ingredientes"
              placeholder="Adicionar"
              isNew
            />
          </div>
          <Input
            id="price"
            type="text"
            label="Preço"
            placeholder="Ex.: R$ 00,00"
          />
          <div className="description-wrapper">
            <Textarea
              id="description"
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>
          <div className="button-wrapper">
            <Button className="delete-button" title="Excluir prato" />
            <Button loading title="Salvar alterações" />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
