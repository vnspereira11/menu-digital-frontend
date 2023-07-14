import { Container } from "./styles";

export function Input({ icon: Icon, id, label, type, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <div className="input-wrapper">
          {Icon && <Icon />}
          <input {...rest} id={id} type={type} />
        </div>
      </div>
    </Container>
  );
}
