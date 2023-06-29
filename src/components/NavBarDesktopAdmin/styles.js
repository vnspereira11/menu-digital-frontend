import styled from "styled-components";

export const Container = styled.header`
  grid-area: navbar;

  height: 11.4rem;
  width: 100%;
  padding: 0 12.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: grid;
  grid-template-columns: auto 1fr auto auto;
  justify-items: center;
  align-items: center;
  gap: 3.2rem;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  > img {
    width: 3rem;
    height: 3rem;
  }

  > p {
    font-size: 2.4rem;
    font-weight: 700;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
    position: absolute;
    top: 2.6rem;
    left: 15rem;
  }
`;

export const NewItem = styled.div`
  width: 21.6rem;
`;

export const Logout = styled.button`
  border: 0;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }
`;
