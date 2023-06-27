import { Container } from "./styles";

export function Button({ title, loading = false }) {
  return (
    <Container
      type="button"
      disabled={loading}
      className={loading ? "button-loading" : "button-active"}
    >
      {title}
    </Container>
  );
}
