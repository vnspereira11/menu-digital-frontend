import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { Carousel } from "../../components/Carousel";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

export function Home({ ...rest }) {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await api.get(`/meals?search=${search}`);
        console.log(response);
        setMeals(response.data.filter((meal) => meal.category === "meal"));
        setDesserts(
          response.data.filter((meal) => meal.category === "dessert")
        );
        setBeverages(
          response.data.filter((meal) => meal.category === "beverage")
        );
      } catch {}
    }

    fetchMeals();
  }, [search]);

  return (
    <Container {...rest}>
      <Header>
        <Input
          icon={FiSearch}
          type="search"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <main>
        <Banner />
        {meals.length > 0 && (
          <Section title="Refeições">
            <Carousel>
              {meals.map((meal) => (
                <Card key={String(meal.id)} data={meal} />
              ))}
            </Carousel>
          </Section>
        )}
        {desserts.length > 0 && (
          <Section title="Sobremesas">
            <Carousel>
              {desserts.map((meal) => (
                <Card key={String(meal.id)} data={meal} />
              ))}
            </Carousel>
          </Section>
        )}
        {beverages.length > 0 && (
          <Section title="Bebidas">
            <Carousel>
              {beverages.map((meal) => (
                <Card key={String(meal.id)} data={meal} />
              ))}
            </Carousel>
          </Section>
        )}
      </main>
      <Footer />
    </Container>
  );
}
