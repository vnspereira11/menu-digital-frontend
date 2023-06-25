import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 7.3rem;
  padding: 10rem 4rem;
`;

export const Brand = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4.3rem;
    height: 4.3rem;
  }

  p {
    font-size: 3.7rem;
    font-weight: 700;
  }
`;

export const Form = styled.form`
  width: 31.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
