import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  align-self: start;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2rem;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
  }
`;
