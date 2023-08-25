import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.2rem;

  @media (min-width: 1020px) {
    padding: 2.4rem 12.3rem;
  }
`;

export const Navbar = styled.nav`
  > button {
    height: 2.8rem;
    width: 2.8rem;
    border: 0;
    background: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.8rem;
    transform: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media (min-width: 1020px) {
    display: none;
  }
`;

export const Brand = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (min-width: 1024px) {
    max-width: 18.6rem;
    flex-direction: column;
    gap: 0;
  }

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
      font-size: 2.1rem;
      font-weight: 700;
    }

    @media (min-width: 1020px) {
      img {
        width: 3rem;
        height: 3rem;
      }

      p {
        font-size: 2.4rem;
      }
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
    font-weight: 400;

    @media (min-width: 1020px) {
      place-self: flex-end;
    }
  }
`;

export const SearchBar = styled.div`
  flex: 1;

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const Logout = styled.button`
  height: 3.2rem;
  width: 3.2rem;
  border: none;
  background: none;
  transition: all 0.3s;

  svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const NewMeal = styled.div`
  width: 21.6rem;

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const ShoppingCart = styled.div``;
