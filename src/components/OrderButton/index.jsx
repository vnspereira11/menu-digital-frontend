import { Container } from "./styles";

export function OrderButton({ icon: Icon, title, amount, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <span>
        {title} {amount}
      </span>
    </Container>
  );
}
