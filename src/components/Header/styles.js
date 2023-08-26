import styled, { css } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;

  ${({ isAdmin }) =>
    !isAdmin &&
    css`
      justify-content: space-between;
    `}

  @media (min-width: 800px) {
    gap: 3.2rem;
    padding: 2.4rem 4rem;
  }

  @media (min-width: 1000px) {
    padding: 2.4rem 6rem;
  }
`;

export const Menu = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  background: none;
  border: none;
  transform: filter 0.3s;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.8rem;
  }

  &:hover {
    filter: brightness(0.7);
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0 auto;

  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.2rem;
      font-weight: 700;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
  }

  @media (min-width: 800px) {
    max-width: 19.7rem;
    margin: 0;
    flex-direction: column;
    gap: 0;

    .logo-wrapper {
      img {
        width: 3rem;
        height: 3rem;
      }

      p {
        font-size: 2.4rem;
      }
    }

    span {
      place-self: end;
    }
  }
`;

export const SearchBar = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    flex: 1;
  }
`;

export const NewMeal = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    width: 21.6rem;
  }
`;

export const Cart = styled.div``;

export const Logout = styled.button`
  display: none;

  width: 3.2rem;
  height: 3.2rem;
  background: none;
  border: none;
  transform: filter 0.3s;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  &:hover {
    filter: brightness(0.7);
  }

  @media (min-width: 800px) {
    display: block;
  }
`;
