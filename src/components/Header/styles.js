import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.4rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.2rem;

  @media (max-width: 770px) {
    padding: 6.4rem 2.8rem;
  }
`;

export const Menu = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  border: 0;
  background: 0;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
      place-self: flex-end;
    }
  }
`;

export const Busca = styled.div`
  flex: 1;

  @media (max-width: 770px) {
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

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  max-width: 21.6rem;

  .button-desktop {
    width: 21.6rem;
  }

  @media (max-width: 1024px) {
    .button-desktop {
      display: none;
    }
  }
`;
