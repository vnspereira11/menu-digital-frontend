import styled from "styled-components";

export const Container = styled.button`
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 3.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }
`;
