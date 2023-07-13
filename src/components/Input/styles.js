import styled from "styled-components";

export const Container = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  > input {
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
    padding: 1.2rem 1.4rem;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
    }
  }
`;
