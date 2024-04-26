import { BoxPrice, DiscountPrice, Price } from "./CardProdctStyle";

export default function CardProductPrice({}) {
  return (
    <>
      <BoxPrice>
        <Price>
          <span>$</span>
          <span>1200</span>
        </Price>
        <DiscountPrice>
          <span>55% off</span>
        </DiscountPrice>
      </BoxPrice>
    </>
  );
}
