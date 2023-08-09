import styled from "styled-components";

export const Container = styled.span`
  /* margin-right: 2.4rem; */
  padding: 0 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: center;
`;
