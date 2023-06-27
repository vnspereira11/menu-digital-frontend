import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      className={loading ? "button-loading" : "button-active"}
      {...rest}
    >
      {title}
    </Container>
  );
}
