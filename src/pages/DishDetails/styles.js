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
    padding: 3.2rem 5.6rem;
    /* overflow-y: auto; */
  }
`;

export const Content = styled.article`
  margin: 0 auto;
  max-width: 31.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    max-width: 80vw;
    flex-direction: row;
    gap: 4.8rem;
  }
`;

export const DishImage = styled.section`
  > img {
    display: block;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1024px) {
    img {
      width: 39rem;
      height: 39rem;
    }
  }
`;

export const DishData = styled.section`
  font-family: "Poppins", sans-serif;
  margin: 0 auto 4.8rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 2.7rem;
    font-weight: 500;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    margin: 2.4rem 0;
  }

  @media (min-width: 1024px) {
    margin: 0;
    align-items: flex-start;
    text-align: left;

    > h1 {
      font-size: 4rem;
    }

    > p {
      font-size: 2.4rem;
    }
  }
`;

export const DishTags = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const AddOrder = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 4.8rem;
`;
