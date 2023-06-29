import styled from "styled-components";

export const Container = styled.header`
  grid-area: navbar;

  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding-top: 5.6rem;

  > nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  p {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Order = styled.button`
  border: none;
  background: none;
  height: 3.2rem;
  position: relative;

  > svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 1.2rem;
    position: absolute;
    top: -0.5rem;
    right: -1rem;
  }
`;
