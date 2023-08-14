import { useState } from "react";
import mealPlaceHolder from "../../assets/meal_placeholder.png";
import { FiEdit3, FiPlus, FiMinus } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Link, useNavigate } from "react-router-dom";

import { Container, Icon, Stepper } from "./styles";

import { Button } from "../Button";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const [amount, setAmount] = useState(1);

  function handleDecreaseAmount() {
    if (amount < 1) {
      return alert("A quantidade não pode ser menor que zero.");
    }
    setAmount(amount - 1);
  }

  function handleIncreaseAmount() {
    setAmount(amount + 1);
  }

  const mealImage =
    data && data.image
      ? `${api.defaults.baseURL}/files/${data.image}`
      : mealPlaceHolder;

  const navigate = useNavigate();

  return (
    <Container className={`${isAdmin ? "is-admin" : ""}`} {...rest}>
      <Icon>
        {isAdmin && (
          <Link to={`/edit/${data.id}`}>
            <FiEdit3 />
          </Link>
        )}
        {!isAdmin && (
          <button>
            <FaRegHeart />
          </button>
        )}
      </Icon>
      <div className="meal-details">
        <img src={mealImage} alt="" />
        <Link to={`/details/${data.id}`}>{data.name}</Link>
        <span className="price">
          {data.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {isAdmin ? null : (
          <Stepper>
            <button onClick={handleDecreaseAmount}>
              <FiMinus />
            </button>
            <span>{String(amount).padStart(2, "0")}</span>
            <button onClick={handleIncreaseAmount}>
              <FiPlus />
            </button>
          </Stepper>
        )}
      </div>
      {isAdmin ? null : <Button title="incluir" />}
    </Container>
  );
}
