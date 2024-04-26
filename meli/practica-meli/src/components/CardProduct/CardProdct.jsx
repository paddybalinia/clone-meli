import IconFull from "../Icons/Full";
import Image from "../Image/Image";
import {
  FigureStyle,
  ItemProduct,
  ItemProductTitle,
  ItemProductData,
} from "./CardProdctStyle";

export default function CardProduct() {
  return (
    <>
      <ItemProduct>
        <FigureStyle>
          <a href="#" title="title" target="_blank" rel="noopener noreferrer">
            <Image
              src={`https://via.placeholder.com/150x150`}
              title={"title"}
              alt={"title"}
              width={150}
              height={150}
            />
          </a>
        </FigureStyle>
        <ItemProductData>
          <ItemProductTitle>
            lorem impsum lorem impsum lorem impsum lorem impsum
          </ItemProductTitle>

          <div className="price">
            <div>
              <span>$</span>
              <span>2400</span>
            </div>
            <div className="current">
              <div>
                <span>$</span>
                <span>1200</span>
              </div>
              <div className="discount">
                <span>55% off</span>
              </div>
            </div>
            <div>
              <span>
                en <span>6x</span>
                <span>$</span>7.354
              </span>
            </div>
          </div>
          <div className="shipping">
            <span>Llega gratis mañana</span>
            <IconFull />
          </div>
        </ItemProductData>
      </ItemProduct>
    </>
  );
}
