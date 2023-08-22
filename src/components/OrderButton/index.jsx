import { Container } from "./styles";

export function OrderButton({ icon: Icon, title, totalAmount, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <div className="title">{title}</div>
      <div className="decoration">
        (<span className="total-amount">{totalAmount}</span>)
      </div>
    </Container>
  );
}
