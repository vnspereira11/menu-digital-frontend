import { Container } from "./styles";

export function Textarea({ id, label, value, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <textarea {...rest} id={id}>
        {value}
      </textarea>
    </Container>
  );
}
