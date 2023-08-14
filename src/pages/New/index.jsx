import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiUpload } from "react-icons/fi";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { FileInput } from "../../components/FileInput";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { api } from "../../services/api";

export function New() {
  const [mealImage, setMealImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("meal");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleMealImage(event) {
    const file = event.target.files[0];
    setMealImage(file);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewMeal() {
    if (!name || !category || !price || !description) {
      return alert("Preencha os campos Nome, Categoria, Preço e Descrição.");
    }

    if (newIngredient) {
      return alert("Confirme o cadastro do ingrediente clicando em +");
    }

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("ingredients", JSON.stringify(ingredients));
      formData.append("description", description);
      formData.append("image", mealImage);

      await api.post("/meals", formData);
      alert("Prato cadastrado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          "Não foi possível cadastrar o prato. Tente novamente mais tarde."
        );
      }
    }
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
            <FileInput
              id="image"
              icon={FiUpload}
              label="Imagem do prato"
              onChange={handleMealImage}
            />
          </div>
          <Input
            id="name"
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            id="category"
            label="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="meal">Refeição</option>
            <option value="dessert">Sobremesa</option>
            <option value="beverage">Bebida</option>
          </Select>
          <div className="ingredients-wrapper">
            <label>Ingredientes</label>
            <div className="ingredients">
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <IngredientItem
                isNew
                id="ingredients"
                label="Ingredientes"
                placeholder="Adicionar"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </div>
          </div>
          <Input
            id="price"
            type="number"
            label="Preço"
            placeholder="Ex.: R$ 00,00"
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="description-wrapper">
            <Textarea
              id="description"
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="button-wrapper">
            <Button title="Salvar alterações" onClick={handleNewMeal} />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
