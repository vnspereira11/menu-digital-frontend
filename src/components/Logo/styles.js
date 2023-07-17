import styled from "styled-components";

export const Container = styled.div`
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
