import { Container } from "./styles";

export function FileInput({ icon: Icon, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>
        <div className="field-wrapper">
          {Icon && <Icon />}
          <input id={id} type="file" {...rest} />
          <span>Selecione imagem</span>
        </div>
      </label>
    </Container>
  );
}
