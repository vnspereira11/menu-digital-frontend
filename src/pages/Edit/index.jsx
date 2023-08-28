import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export function Edit() {
  const [data, setData] = useState(null);

  const [updatedImage, setUpdatedImage] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("meal");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  function handleChangeMealImage(event) {
    const file = event.target.files[0];
    setUpdatedImage(file);
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

  async function handleUpdateMeal() {
    try {
      const formData = new FormData();

      formData.append("image", updatedImage);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("ingredients", JSON.stringify(ingredients));
      formData.append("price", price);
      formData.append("description", description);

      await api.put(`/meals/${params.id}`, formData);
      alert("Prato atualizado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          "Não foi possível atualizar o prato. Tente novamente mais tarde."
        );
      }
    }
  }

  async function handleDeleteMeal() {
    try {
      await api.delete(`/meals/${params.id}`);
      alert("Prato excluído com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          "Não foi possível excluir o prato. Tente novamente mais tarde."
        );
      }
    }
  }

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${params.id}`);
      setData(response.data);

      const { name, category, ingredients, price, description } = response.data;
      setName(name);
      setCategory(category);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
      setPrice(price);
      setDescription(description);
    }
    fetchMeal();
  }, []);

  return (
    <Container>
      <Header>
        <Input
          icon={FiSearch}
          type="search"
          placeholder="Busque por pratos ou ingredientes"
        />
      </Header>
      <main>
        <BackButton title="voltar" to="/" />
        <h1>Editar prato</h1>
        <Form>
          <div className="image-wrapper">
            <p>Imagem do prato</p>
            <FileInput
              id="image"
              icon={FiUpload}
              label="Imagem do prato"
              onChange={handleChangeMealImage}
            />
          </div>
          <Input
            id="name"
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            id="category"
            label="Categoria"
            value={category}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="description-wrapper">
            <Textarea
              id="description"
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="button-wrapper">
            <Button
              className="delete-button"
              title="Excluir prato"
              onClick={handleDeleteMeal}
            />
            <Button title="Salvar alterações" onClick={handleUpdateMeal} />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}
