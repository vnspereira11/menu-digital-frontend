import { Container } from "./styles";

export function Select({ id, label, children, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        {children}
      </select>
    </Container>
  );
}
