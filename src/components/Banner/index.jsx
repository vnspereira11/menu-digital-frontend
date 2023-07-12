import bgImage from "../../assets/background.svg";
import { Container, Wrapper } from "./styles";

export function Banner() {
  return (
    <Container>
      <div className="banner-bg">
        <Wrapper>
          <img src={bgImage} alt="" />
          <div className="banner-title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Wrapper>
      </div>
    </Container>
  );
}
