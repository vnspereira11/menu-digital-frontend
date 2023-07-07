import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 11.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 3.2rem;
    padding: 2.4rem 5.6rem;
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;
  height: 3rem;

  > svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Brand = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: end;
    gap: 0;

    > div {
      img {
        width: 3rem;
        height: 3rem;
      }

      > p {
        font-size: 2.4rem;
      }
    }
  }
`;

export const OrderSmall = styled.button`
  border: none;
  background: none;
  height: 3.2rem;
  position: relative;

  > svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 1.2rem;
    position: absolute;
    top: -0.5rem;
    right: -1rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Search = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex: 1;
  }
`;

export const OrderLarge = styled.div`
  display: none;

  @media (min-width: 1024px) {
    width: 21.6rem;
    display: block;
  }
`;

export const Logout = styled.button`
  display: none;
  border: 0;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;
