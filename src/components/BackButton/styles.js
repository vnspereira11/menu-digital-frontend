import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  align-self: start;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2.4rem;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
  }
`;
