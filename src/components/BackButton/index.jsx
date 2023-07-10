import { FiChevronLeft } from "react-icons/fi";

import { Container } from "./styles";

export function BackButton({ title, ...rest }) {
  return (
    <Container {...rest}>
      <FiChevronLeft />
      {title}
    </Container>
  );
}
