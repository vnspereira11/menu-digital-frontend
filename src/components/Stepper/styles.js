import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  > button {
    background: transparent;
    border: none;
    height: 2.4rem;
    transform: filter 0.2s;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 2.4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-weight: 700;
  }
`;
