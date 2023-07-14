import { Container } from "./styles";

export function FileInput({ icon: Icon, id, label, ...rest }) {
  return (
    <Container>
      {label && (
        <label htmlFor={id}>
          {label}
          <div className="field-wrapper">
            {Icon && <Icon />}
            <input id={id} type="file" {...rest} />
            <span>Selecione imagem</span>
          </div>
        </label>
      )}
    </Container>
  );
}
