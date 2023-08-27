import styled from "styled-components";

export const Container = styled.section`
  min-width: 42rem;
  margin: 0 auto 6rem;

  display: flex;
  align-items: center;

  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 70%;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    border-radius: 3px;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 1rem;
  }

  img {
    width: 19.1rem;
    height: 14.9rem;
    object-fit: cover;
    align-self: end;
  }

  @media (min-width: 680px) {
    img {
      width: 24.1rem;
      height: 19.9rem;
    }
  }

  @media (min-width: 1000px) {
    img {
      width: 36.2rem;
      height: 27.8rem;
    }
  }
`;

export const BannerInfos = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3px;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 140%;
  }

  @media (min-width: 760px) {
    margin-left: 2rem;

    h2 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1000px) {
    margin-top: 8rem;

    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
