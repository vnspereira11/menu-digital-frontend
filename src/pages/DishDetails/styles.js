import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    padding: 3.2rem 5.6rem;
  }
`;

export const Content = styled.article`
  width: 31.6rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    align-self: start;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 3.2rem;
    }
  }
`;

export const Dish = styled.section`
  font-family: "Poppins", sans-serif;
  margin: 0 auto 4.8rem;
  text-align: center;
  width: 31.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .dish-image img {
    display: block;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 1.6rem;
  }

  > .dish-description {
    h1 {
      font-size: 2.7rem;
      font-weight: 500;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      margin: 2.4rem 0;
    }
  }

  > .dish-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }
`;

export const AddOrder = styled.section`
  width: 31.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > button {
    background: transparent;
    border: none;
    transform: filter 0.2s;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  > span {
    font-size: 2rem;
    font-weight: 700;
  }
`;
