import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    height: calc(100vh - 19.1rem);
    padding: 3.6rem 2.8rem;

    nav ul {
      margin-top: 3.6rem;
    }

    nav ul li {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      margin-bottom: 1rem;
      padding: 1rem;
    }

    nav ul li a {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 140%;
    }
  }
`;

export const MenuHeader = styled.header`
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  button {
    height: 2.1rem;
    background: none;
    border: none;

    svg {
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      transition: all 0.3s ease;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }

  span {
    font-size: 2.1rem;
  }
`;
