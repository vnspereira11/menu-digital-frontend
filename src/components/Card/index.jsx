import { useState, useEffect } from "react";

import mealPlaceHolder from "../../assets/meal_placeholder.png";
import { FiEdit3, FiPlus, FiMinus } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { formatCurrency } from "../../utils/formatCurrency";

import { Link } from "react-router-dom";

import { Container, Icon, Stepper } from "./styles";

import { Button } from "../Button";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  async function handleFavorites() {
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${favoriteId}`);
        setIsFavorite(false);
      } else {
        const response = await api.post(`/favorites`, {
          user_id: user.id,
          meal_id: data.id,
        });
        setIsFavorite(true);
        setFavoriteId(response.data.id);
      }
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          "Não foi possível concluir a ação. Tente novamente mais tarde."
        );
      }
    }
  }

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

  async function handleAmountMeals() {
    if (amount <= 0) {
      return alert("Adicione pelo menos um prato ao pedido.");
    }

    try {
      await api.post("/order_meals", {
        amount: amount,
        meal_id: data.id,
        user_id: user.id,
      });
      alert("Adicionado com sucesso!");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert(
          "Não foi possível adicionar ao pedido. Tente novamente mais tarde."
        );
      }
    }
  }

  const mealImage =
    data && data.image
      ? `${api.defaults.baseURL}/files/${data.image}`
      : mealPlaceHolder;

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        const favorites = response.data;
        const favorite = favorites.find((fav) => fav.meal_id === data.id);
        setIsFavorite(favorite ? true : false);
        setFavoriteId(favorite ? favorite.id : null);
      } catch (error) {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert(
            "Não foi possível buscar os favoritos. Tente novamente mais tarde."
          );
        }
      }
    }
    fetchFavorites();
  }, []);

  return (
    <Container
      className={`${isAdmin ? "is-admin" : ""}`}
      isfavorite={isFavorite ? 1 : 0}
      {...rest}
    >
      <Icon>
        {isAdmin && (
          <Link to={`/edit/${data.id}`}>
            <FiEdit3 />
          </Link>
        )}
        {!isAdmin && (
          <button onClick={handleFavorites}>
            {isFavorite ? <FaHeart className="favorited"/> : <FaRegHeart />}
          </button>
        )}
      </Icon>
      <div className="meal-details">
        <img src={mealImage} alt="" />
        <Link to={`/details/${data.id}`}>{data.name}</Link>
        <span className="price">{formatCurrency(data.price, "BRL")}</span>
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
      {isAdmin ? null : <Button title="incluir" onClick={handleAmountMeals} />}
    </Container>
  );
}
