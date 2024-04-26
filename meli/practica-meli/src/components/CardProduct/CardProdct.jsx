import IconFull from "../Icons/Full";
import Image from "../Image/Image";
import CardProductPrice from "./CardProdctPrice";
import {
  FigureStyle,
  ItemProduct,
  ItemProductTitle,
  ItemProductData,
  ItemProductShipping,
  ItemProductDues,
  PriceOlder,
  ComponentPrice,
} from "./CardProdctStyle";

export default function CardProduct() {
  return (
    <>
      <ItemProduct>
        <FigureStyle>
          <a href="#" title="title" target="_blank" rel="noopener noreferrer">
            <Image
              src={`https://via.placeholder.com/300x300`}
              title={"title"}
              alt={"title"}
              width={300}
              height={300}
            />
          </a>
        </FigureStyle>
        <ItemProductData>
          <ItemProductTitle>
            lorem impsum lorem impsum lorem impsum lorem impsum
          </ItemProductTitle>

          <ComponentPrice>
            <PriceOlder>
              <div>
                <span>$</span>
                <span>2400</span>
              </div>
            </PriceOlder>
            <CardProductPrice />
            <ItemProductDues>
              <span>
                en <span>6x</span>
                <span>$</span>7.354
              </span>
            </ItemProductDues>
          </ComponentPrice>

          <ItemProductShipping>
            <span>Llega gratis mañana</span>
            <IconFull />
          </ItemProductShipping>
        </ItemProductData>
      </ItemProduct>
    </>
  );
}
