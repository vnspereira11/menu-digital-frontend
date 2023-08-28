import { Container } from "./styles";

export function Button({ title, isButtonDisabled, ...rest }) {
  return (
    <Container type="button" disabled={isButtonDisabled} {...rest}>
      {title}
    </Container>
  );
}
