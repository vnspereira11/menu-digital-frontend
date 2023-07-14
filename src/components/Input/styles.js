import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  > div {
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    padding: 1.2rem 1.4rem;
    display: flex;
    align-items: center;

    > .input-wrapper {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      gap: 1.4rem;

      svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.4rem;
        outline: 0;

        &placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
          font-size: 1.6rem;
        }
      }
    }
  }
`;
