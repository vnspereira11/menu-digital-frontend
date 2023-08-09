import mealImg from "../../assets/ravanello300.svg";
import { FiHeart, FiEdit3 } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Container, Favorite } from "./styles";

import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Card({ data, isAdmin, ...rest }) {
  return (
    <Container {...rest}>
      <Favorite>{isAdmin ? <FiEdit3 /> : <FiHeart />}</Favorite>
      <div className="dish-details">
        <img src={mealImg} alt="" />
        <Link to="/details/:id">{data.title}</Link>
        <span className="price">{data.price}</span>
        {isAdmin ? null : <Stepper count="01" />}
      </div>
      {isAdmin ? null : <Button title="incluir" />}
    </Container>
  );
}
