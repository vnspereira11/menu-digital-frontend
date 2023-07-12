import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */

  > .banner-bg {
    width: 37.6rem;
    height: 12rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    border-radius: 0.8rem;
    margin-top: 4.4rem;
    margin-bottom: 6.2rem;
    margin-left: 1.6rem;
    margin-right: 1.6rem;

    @media (min-width: 1024px) {
      margin-top: 12rem;

      width: 112rem;
      height: 26rem;
    }
  }
`;

export const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;

  img {
    width: 19.1rem;
    height: 14.9rem;
    margin-left: -3rem;
    margin-top: -3rem;

    @media (min-width: 1024px) {
      width: 592px;
      height: 366px;
      margin-left: -7rem;
      margin-top: -10.8rem;
    }
  }

  .banner-title {
    max-width: 20rem;
    margin-right: 2rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 140%;
  }

  @media (min-width: 1024px) {
    .banner-title {
      max-width: 800rem;
      margin-right: 2rem;
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
