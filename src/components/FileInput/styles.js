import styled from "styled-components";

export const Container = styled.div`
  width: 27.2rem;

  > label {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  > label .field-wrapper {
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    margin-top: 1.6rem;
    padding: 1.2rem 3.2rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    input {
      display: none;
    }

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
    }

    svg {
      font-size: 2.4rem;
    }
  }
`;
