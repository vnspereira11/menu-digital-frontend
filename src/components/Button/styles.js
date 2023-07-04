import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: 0;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding: 1.2rem 2.4rem;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &.button-loading {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;
