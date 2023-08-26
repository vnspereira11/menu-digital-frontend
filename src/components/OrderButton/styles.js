import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  background: none;
  display: flex;

  position: relative;

  transition: all 0.3s;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  .title {
    display: none;

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  .decoration {
    height: 2rem;
    width: 2rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -0.5rem;
    left: 1.8rem;
  }

  .total-amount {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 800px) {
    height: 4.8rem;
    position: static;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 0.5rem;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;
    transition: all 0.3s;

    .title {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .decoration {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      position: static;
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      opacity: 1;
    }
  }
`;
