import { Container } from "./styles";

export function Input({ id, label, type, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} type={type} />
    </Container>
  );
}
