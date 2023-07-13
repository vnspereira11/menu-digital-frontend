import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function TagInput({ id, label, isNew, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <label htmlFor={id}>{label}</label>
      <div className="bg-field">
        <div className="input-wrapper">
          <input
            type="text"
            id={id}
            value={value}
            readOnly={!isNew}
            {...rest}
          />
          <button type="button">{isNew ? <FiPlus /> : <FiX />}</button>
        </div>
      </div>
    </Container>
  );
}
