import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.main`
  grid-area: content;
  padding: 3.2rem 5.6rem;
`;
