import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2.4rem;

    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }
  }
`;
