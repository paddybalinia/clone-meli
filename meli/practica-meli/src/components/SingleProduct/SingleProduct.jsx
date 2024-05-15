//todo
// import { useParams } from "react-router-dom";
// import { useFetchData } from "../../services/fetchData";

// import Data from "../../mocks/singleProduct.json";
// import DataInfo from "../../mocks/singleProductDesc.json";

import {
  ContentStyle,
  ProductStyle,
  ProductLabel,
  ProductTitle,
  ProductButton,
  ProductInfo,
  ProductDetailsBox,
  ProductDetailsTitle,
  FigureStyle,
  ProductDetailsText,
  ImgStyle,
} from "./SingleProductStyle";
import Header from "../Header/Header";

export function SingleProduct({ ...params }) {
  const data = params.product;
  const data2 = params.desc;

  const conditionText = data?.condition == "new" ? "Nuevo" : "Usado";

  return (
    <>
      <Header />
      <ContentStyle>
        {data && (
          <ProductStyle>
            <FigureStyle>
              {data.pictures && data.pictures[0] && (
                <ImgStyle src={data.pictures[0].url} alt={data.title} />
              )}
            </FigureStyle>
            <ProductInfo>
              <ProductLabel>{conditionText}</ProductLabel>
              <ProductTitle>{data.title}</ProductTitle>
              <ProductButton type="button" name="Comprar" aria-label="Comprar">
                Comprar
              </ProductButton>
            </ProductInfo>
          </ProductStyle>
        )}
        {data2 && (
          <ProductDetailsBox>
            <ProductDetailsTitle>Detalle del producto</ProductDetailsTitle>
            <ProductDetailsText>{data2.plain_text}</ProductDetailsText>
          </ProductDetailsBox>
        )}
      </ContentStyle>
    </>
  );
}
