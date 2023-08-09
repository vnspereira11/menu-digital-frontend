import { useState } from "react";
import { FiSearch, FiUpload } from "react-icons/fi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { FileInput } from "../../components/FileInput";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TagInput } from "../../components/TagInput";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { Footer } from "../../components/Footer";

export function New() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }
  return (
    <Container>
      <Header isAdmin>
        <Input
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </Header>
      <main>
        <BackButton title="voltar" to="/" />
        <h1>Adicionar prato</h1>
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
            {ingredients.map((ingredient, index) => (
              <TagInput
                key={String(index)}
                value={ingredient}
                onClick={() => {}}
              />
            ))}
            <TagInput
              isNew
              id="ingredients"
              label="Ingredientes"
              placeholder="Adicionar"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              onClick={handleAddIngredient}
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
            <Button loading title="Salvar alterações" />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
