import styled from "styled-components";

export const Container = styled.div`
  max-width: 95vw;
  margin-bottom: 2rem;
  padding: 1rem;

  .carousel-wrapper {
    position: relative;
  }

  .carousel {
    display: flex;
    flex-wrap: nowrap;
    gap: 1.6rem;

    overflow-x: auto;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .buttons {
    width: 10rem;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: auto;
    border: none;

    background: linear-gradient(-90deg, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%);
    padding: 0 1.8rem;
    opacity: 0.2;
    text-align: left;
    transition: all 0.3s ease-in-out;

    svg {
      font-size: 4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &:hover {
      opacity: 1;
    }
  }

  .right {
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%);
    left: auto;
    right: 0;
    text-align: right;
  }

  @media (max-width: 770px) {
    .buttons svg {
      opacity: 0;
    }
  }
`;
