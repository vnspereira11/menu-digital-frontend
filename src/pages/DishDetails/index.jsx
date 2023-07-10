import { FiSearch, FiChevronLeft } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";

import dishImg from "../../assets/ravanello300.svg";
import { Container, Content, Dish, AddOrder } from "./styles";

import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { OrderButton } from "../../components/OrderButton";
import { BackButton } from "../../components/BackButton";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";

export function DishDetails() {
  return (
    <Container>
      <Header>
        <SearchInput
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </Header>
      <main>
        <Content>
          <BackButton href="/" title="voltar" />
          <Dish>
            <div className="dish-image">
              <img src={dishImg} alt="" />
            </div>
            <div className="dish-description">
              <h1>Salada Ravanello</h1>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim.
              </p>
            </div>
            <div className="dish-tags">
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </div>
          </Dish>
          <AddOrder>
            <Stepper count="01" />
            <OrderButton icon={PiReceiptBold} title="pedir - R$ " amount={25} />
          </AddOrder>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
