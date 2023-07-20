import { FiSearch } from "react-icons/fi";
import { PiReceiptBold } from "react-icons/pi";

import dishImg from "../../assets/ravanello300.svg";
import {
  Container,
  Content,
  DishImage,
  DishData,
  DishTags,
  AddOrder,
} from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { OrderButton } from "../../components/OrderButton";
import { BackButton } from "../../components/BackButton";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { Footer } from "../../components/Footer";

export function Details() {
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
        <BackButton href="/" title="voltar" />
        <Content>
          <DishImage>
            <img src={dishImg} alt="" />
          </DishImage>
          <DishData>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <DishTags>
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </DishTags>
            <AddOrder>
              <Stepper count="01" />
              <OrderButton
                icon={PiReceiptBold}
                title="Incluir R$ "
                amount={25}
              />
            </AddOrder>
          </DishData>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
