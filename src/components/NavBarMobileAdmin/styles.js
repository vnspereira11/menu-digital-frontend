import styled from "styled-components";

export const Container = styled.header`
  grid-area: navbar;

  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 2.8rem 0;

  > nav {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;
  height: 3rem;

  > svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Brand = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > p {
    font-size: 2rem;
    font-weight: 700;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
