import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.8rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    padding: 2.8rem;
  }
`;
