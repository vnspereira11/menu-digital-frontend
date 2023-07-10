import { Container } from "./styles";
import { FiPlus, FiMinus } from "react-icons/fi";

export function Stepper({ count, ...rest }) {
  return (
    <Container {...rest}>
      <button>{<FiMinus />}</button>
      <span>{count}</span>
      <button>{<FiPlus />}</button>
    </Container>
  );
}
