//todo
import Data from "../../mocks/singleProduct.json";
import DataInfo from "../../mocks/singleProductDesc.json";
import {
  ContentStyle,
  ProductStyle,
  ProductLabel,
  ProductTitle,
  ProductButton,
  ProductInfo,
  ProductDetailsBox,
  ProductDetailsTitle,
  ProductDetailsText,
} from "./SingleProductStyle";

export function SingleProduct() {
  const { title, pictures, condition } = Data;
  const { plain_text } = DataInfo;

  const conditionText = condition == "new" ? "Nuevo" : "Usado";

  return (
    <ContentStyle>
      <ProductStyle>
        <div>
          {pictures && pictures[0] && <img src={pictures[0].url} alt={title} />}
        </div>
        <ProductInfo>
          <ProductLabel>{conditionText}</ProductLabel>
          <ProductTitle>{title}</ProductTitle>
          <ProductButton type="button" name="Comprar" aria-label="Comprar">
            Comprar
          </ProductButton>
        </ProductInfo>
      </ProductStyle>

      {plain_text && (
        <ProductDetailsBox>
          <ProductDetailsTitle>Detalle del producto</ProductDetailsTitle>
          <ProductDetailsText>{plain_text}</ProductDetailsText>
        </ProductDetailsBox>
      )}
    </ContentStyle>
  );
}
