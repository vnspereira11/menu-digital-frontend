import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 0.8rem;
  margin-right: 1.6rem;
  padding: 1rem 1.6rem;

  > input {
    width: 100%;
    background: none;
    border: none;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.4rem;
    }
  }

  > button {
    border: none;
    background: none;

    svg {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      transition: all 0.3s ease-in-out;

      &:hover {
        color: ${({ theme, isNew }) =>
          isNew ? theme.COLORS.CAKE_100 : theme.COLORS.TOMATO_100};
        font-weight: 700;
      }
    }
  }
`;
