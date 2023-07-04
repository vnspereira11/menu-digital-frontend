import { Container } from "./styles";

export function OrderButton({ icon: Icon, title, amount, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
      <span>({amount})</span>
    </Container>
  );
}
