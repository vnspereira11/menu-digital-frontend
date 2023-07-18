import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { Carousel } from "../../components/Carousel";
import { Item } from "../../components/Item";
import { Footer } from "../../components/Footer";

export function Home({ isAdmin, ...rest }) {
  return (
    <Container {...rest}>
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
          <Carousel>
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
            <Item
              className="is-admin"
              isAdmin
              data={{ title: "Salada Ravanello >", price: "R$ 49,97" }}
            />
          </Carousel>
        </Section>
        <Section title="Sobremesas">
          <Carousel>
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
          </Carousel>
        </Section>
        <Section title="Bebidas">
          <Carousel>
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
            <Item data={{ title: "Salada Ravanello >", price: "R$ 49,97" }} />
          </Carousel>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
