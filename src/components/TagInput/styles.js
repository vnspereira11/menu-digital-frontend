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

  > .bg-field {
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    padding: 0.8rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > .input-wrapper {
      height: 3.2rem;
      max-width: 12rem;
      background-color: ${({ theme, isNew }) =>
        isNew ? "transparent" : theme.COLORS.LIGHT_600};
      border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
      border-radius: 0.8rem;
      margin-right: 1.6rem;
      padding: 1rem 1.6rem;

      display: flex;
      align-items: center;

      input {
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
    }
  }
`;
