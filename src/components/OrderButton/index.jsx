import { Container } from "./styles";

export function OrderButton({ icon: Icon, title, amount, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <div className="title">{title}</div>
      <div className="decoration">
        (<span className="amount">{amount}</span>)
      </div>
    </Container>
  );
}
