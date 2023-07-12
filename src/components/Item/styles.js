import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;
  padding: 2.4rem;
  margin-bottom: 3rem;

  position: relative;

  > .dish-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.6rem;

    > img {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 50%;
    }

    h3 {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    .price {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-family: Roboto, sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    }
  }

  > div {
    span {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  > button {
    padding: 0.6rem;
  }
`;

export const Favorite = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
  }
`;
