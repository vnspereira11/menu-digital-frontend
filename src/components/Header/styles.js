import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2.4rem 8rem;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 770px) {
    padding: 6.4rem 2.8rem;
    justify-content: space-around;
  }
`;

export const Menu = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  border: 0;
  background: 0;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Busca = styled.div`
  flex: 1;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Logout = styled.button`
  height: 3.2rem;
  width: 3.2rem;
  border: none;
  background: none;
  transition: all 0.3s;

  svg {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  max-width: 21.6rem;
`;
