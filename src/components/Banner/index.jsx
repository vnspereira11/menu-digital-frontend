import bannerImage from "../../assets/background.svg";
import {
  Container,
  BannerInfos,
} from "./styles";

export function Banner() {
  return (
    <Container>
          <img src={bannerImage} alt="Macarons coloridos e frutas vermelhas." />
          <BannerInfos>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </BannerInfos>
    </Container>
  );
}
