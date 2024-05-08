//todo
import { useParams } from "react-router-dom";
import { useFetchData } from "../../services/fetchData";

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
  ProductDetailsText,
} from "./SingleProductStyle";
import Header from "../Header/Header";

export function SingleProduct() {
  let params = useParams();

  const { data: data } = useFetchData(`items/${params.id}`);
  const { data: data2 } = useFetchData(`items/${params.id}/description`);

  // const { title, pictures, condition } = Data;
  // const { plain_text } = DataInfo;

  const conditionText = data?.condition == "new" ? "Nuevo" : "Usado";

  return (
    <>
      <Header />
      <ContentStyle>
        {data && (
          <ProductStyle>
            <div>
              {data.pictures && data.pictures[0] && (
                <img src={data.pictures[0].url} alt={data.title} />
              )}
            </div>
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
