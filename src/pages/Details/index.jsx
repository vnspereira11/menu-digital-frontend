import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { formatCurrency } from "../../utils/formatCurrency";

import { FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import mealPlaceHolder from "../../assets/meal_placeholder.png";

import {
  Container,
  Content,
  MealImage,
  MealData,
  MealIngredients,
  EditMeal,
  AddOrder,
} from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const mealImage =
    data && data.image
      ? `${api.defaults.baseURL}/files/${data.image}`
      : mealPlaceHolder;

  function handleNavigation() {
    navigate(`/edit/${params.id}`);
  }

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${params.id}`);
      setData(response.data);
      console.log(response);
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
        {data && (
          <Content>
            <MealImage>
              <img src={mealImage} alt="" />
            </MealImage>
            <MealData>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              {data.ingredients && (
                <MealIngredients>
                  {data.ingredients.map((ingredient) => (
                    <Ingredient
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))}
                </MealIngredients>
              )}
              {isAdmin && (
                <EditMeal>
                  <Button title="Editar prato" onClick={handleNavigation} />
                </EditMeal>
              )}
              {!isAdmin && (
                <AddOrder>
                  <Stepper count="01" />
                  <button type="button">
                    <PiReceiptBold />
                    pedir - <span>{formatCurrency(data.price, "BRL")}</span>
                  </button>
                </AddOrder>
              )}
            </MealData>
          </Content>
        )}
      </main>
      <Footer />
    </Container>
  );
}
