import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";
import mealPlaceHolder from "../../assets/meal_placeholder.png";

import {
  Container,
  Content,
  MealImage,
  MealData,
  MealIngredients,
  AddOrder,
} from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { OrderButton } from "../../components/OrderButton";
import { BackButton } from "../../components/BackButton";
import { Ingredient } from "../../components/Ingredient";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();

  const mealImage =
    data && data.image
      ? `${api.defaults.baseURL}/files/${data.image}`
      : mealPlaceHolder;

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
              <AddOrder>
                <Stepper count="01" />
                <OrderButton
                  icon={PiReceiptBold}
                  title="Incluir R$ "
                  amount={25}
                />
              </AddOrder>
            </MealData>
          </Content>
        )}
      </main>
      <Footer />
    </Container>
  );
}
