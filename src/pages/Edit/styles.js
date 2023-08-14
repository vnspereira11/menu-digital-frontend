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
    padding: 1.2rem 3.2rem;

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

  .image-wrapper {
    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      margin-bottom: 0.9rem;
    }
  }

  .ingredients-wrapper {
    label {
      display: inline-block;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }

    .ingredients {
      height: 4.8rem;
      grid-column: 1 / 3;
      display: flex;
      justify-content: flex-start;
      gap: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
      padding: 0.8rem;
    }
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    .delete-button {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, auto);

    .ingredients-wrapper {
      grid-column: 1 / 3;
    }
    .description-wrapper {
      grid-column: 1 / -1;
    }
    .button-wrapper {
      grid-column: 3 / 4;
    }
  }
`;
