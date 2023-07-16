import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container } from "./styles";

export function Carousel({ children }) {
  const carouselControls = useRef(null);

  function handleLeftClick(event) {
    event.preventDefault();
    carouselControls.current.scrollLeft -= carouselControls.current.offsetWidth;
  }

  function handleRightClick(event) {
    event.preventDefault();
    carouselControls.current.scrollLeft += carouselControls.current.offsetWidth;
  }

  return (
    <Container>
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselControls}>
          {children}
        </div>
        <button className="buttons left" onClick={handleLeftClick}>
          <FiChevronLeft />
        </button>
        <button className="buttons right" onClick={handleRightClick}>
          <FiChevronRight />
        </button>
      </div>
    </Container>
  );
}
