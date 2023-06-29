import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media (max-width: 340px) {
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 12.3rem;

    p {
      font-size: 1.4rem;
    }
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2rem;
    height: 2rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (max-width: 340px) {
    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    > img {
      width: 3rem;
      height: 3rem;
    }
    p {
      font-size: 2.4rem;
    }
  }
`;
