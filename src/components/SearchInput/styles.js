import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  margin: 2rem;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-left: 14.4rem;
  }

  > input {
    height: 4.8rem;
    width: 100%;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 1.2rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
