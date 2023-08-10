import mealImg from "../../assets/ravanello300.svg";
import { FiHeart, FiEdit3 } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { Link, useNavigate } from "react-router-dom";

import { Container, Favorite } from "./styles";

import { Stepper } from "../Stepper";
import { Button } from "../Button";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container className={`${isAdmin ? "is-admin" : ""}`} {...rest}>
      <Favorite>{isAdmin ? <FiEdit3 /> : <FiHeart />}</Favorite>
      <div className="meal-details">
        <img src={mealImg} alt="" />
        <Link to={`/details/${data.id}`}>{data.name}</Link>
        <span className="price">
          {data.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {isAdmin ? null : <Stepper count="01" />}
      </div>
      {isAdmin ? null : <Button title="incluir" />}
    </Container>
  );
}
