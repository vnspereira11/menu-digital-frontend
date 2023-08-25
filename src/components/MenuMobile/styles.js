import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;

  display: grid;
  grid-template-rows: 11.8rem auto 7.7rem;
  grid-template-areas:
    "menu"
    "content"
    "footer";

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > header {
    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 5.6rem 2.8rem 2.4rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    button {
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
    }

    span {
      font-size: 2.2rem;
      font-weight: 400;
    }
  }

  > main {
    grid-area: content;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    padding: 2.8rem 3.6rem;

    nav {
      margin-top: 4.6rem;
    }

    li {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      margin-bottom: 1rem;
      padding: 1rem;
      transform: scale(0.9);
      transition: 0.9s;
    }

    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 140%;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      main nav ul li {
        transform: scale(1);
      }
    `}
`;
