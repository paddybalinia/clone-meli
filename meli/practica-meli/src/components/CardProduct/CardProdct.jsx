import PropTypes from "prop-types";

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
import { Link } from "react-router-dom";

export default function CardProduct({
  id,
  title,
  thumbnail,
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
          <Link to={`/items/:${id}}`} title={title} rel="noopener noreferrer">
            <Image
              src={thumbnail}
              title={title}
              alt={title}
              width={300}
              height={300}
            />
          </Link>
        </FigureStyle>

        <ItemProductData>
          <ItemProductTitle>
            <Link to={`/items/:${id}}`} title={title} rel="noopener noreferrer">
              {title}
            </Link>
          </ItemProductTitle>

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

CardProduct.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }),
  installments: PropTypes.shape({
    quantity: PropTypes.number,
    amount: PropTypes.number,
  }),
  discounts: PropTypes.number,
};
