import { BoxPrice, DiscountPrice, Price } from "./CardProdctStyle";

export default function CardProductPrice({ price, discounts }) {
  return (
    <>
      <BoxPrice>
        <Price>
          <span>$</span>
          <span>{price}</span>
        </Price>
        {discounts && (
          <DiscountPrice>
            <span>55% off</span>
          </DiscountPrice>
        )}
      </BoxPrice>
    </>
  );
}
