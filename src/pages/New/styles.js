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
    max-width: 36.4rem;
    margin: 0 auto;
    padding: 1.2rem 3.2rem;

    @media (min-width: 1024px) {
      max-width: 100%;
      margin: 0;
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-size: 2.8rem;
      font-weight: 500;
      line-height: 140%;
      margin: 2.8rem 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 5.3rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto auto;

    .ingredients-wrapper {
      grid-column: 1 / 3;
    }
    .description-wrapper {
      grid-column: 1 / -1;
    }
    .button-wrapper {
      grid-column: 3 / 4;
      place-self: end;
    }
  }
`;
