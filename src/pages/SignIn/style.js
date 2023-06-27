import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 7.3rem;
  padding: 10rem 4rem;

  @media (min-width: 1000px) {
    height: 100vh;
    grid-template-columns: 1fr 1fr;
    place-content: center;
  }
`;

export const Brand = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: clamp(3rem, 3rem + 2vw, 4.9rem);
    height: clamp(3rem, 3rem + 2vw, 4.9rem);
  }

  p {
    font-size: clamp(2rem, 2rem + 2vw, 4.2rem);
    font-weight: 700;
  }
`;

export const Form = styled.form`
  width: clamp(20rem, 20rem + 15vw, 47.6rem);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-family: Poppins;
    font-weight: 500;
    text-align: center;
    display: none;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
  }

  @media (min-width: 1000px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    padding: 6.4rem;

    h1 {
      display: block;
    }
  }
`;
