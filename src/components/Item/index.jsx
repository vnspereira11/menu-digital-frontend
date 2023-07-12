import dishImg from "../../assets/ravanello300.svg";
import { FiHeart } from "react-icons/fi";

import { Container, Favorite } from "./styles";

import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Item({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Favorite>
        <FiHeart />
      </Favorite>
      <div className="dish-details">
        <img src={dishImg} alt="" />
        <h3>{data.title}</h3>
        <span className="price">{data.price}</span>
        <Stepper count="01" />
      </div>
      <Button title="incluir" />
    </Container>
  );
}
