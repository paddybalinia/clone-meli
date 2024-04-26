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

export default function CardProduct({
  title,
  src,
  price,
  shipping,
  installments,
  discounts,
}) {
  const { free_shipping = false } = shipping || {};
  const { quantity = false, amount = false } = installments || {};
  return (
    <>
      <ItemProduct>
        {free_shipping}
        <FigureStyle>
          <a href="#" title="title" target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              title={"title"}
              alt={"title"}
              width={300}
              height={300}
            />
          </a>
        </FigureStyle>

        <ItemProductData>
          <ItemProductTitle>{title}</ItemProductTitle>

          <ComponentPrice>
            {discounts && (
              <PriceOlder>
                <div>
                  <span>$</span>
                  <span>{price}</span>
                </div>
              </PriceOlder>
            )}

            <CardProductPrice price={price} discounts={discounts} />
            {installments && (
              <ItemProductDues>
                <span>
                  en <span>{quantity}</span>
                  <span> $</span>
                  {amount}
                </span>
              </ItemProductDues>
            )}
          </ComponentPrice>

          {free_shipping && (
            <ItemProductShipping>
              <span>Llega gratis mañana</span>
              <IconFull />
            </ItemProductShipping>
          )}
        </ItemProductData>
      </ItemProduct>
    </>
  );
}
