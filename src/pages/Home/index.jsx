import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { Item } from "../../components/Item";
import { Footer } from "../../components/Footer";

export function Home() {
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
        <Banner />
        <Section title="Refeições">
          <Item
            className="is-admin"
            isAdmin
            data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
          />
        </Section>
        <Section title="Sobremesas">
          <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
        </Section>
        <Section title="Bebidas">
          <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
