import styled from "styled-components";

export const ItemProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ItemProductData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FigureStyle = styled.figure`
  position: relative;
  max-width: 210px;
`;

export const ItemProductTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 28px;
`;

export const ItemProductDues = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.colorGreen};
`;

export const ItemProductShipping = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.colorGreen};
`;

// Price

export const ComponentPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const PriceOlder = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  text-decoration-line: line-through;
  color: #707070;
`;

export const BoxPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #000;
  text-align: center;
`;

export const DiscountPrice = styled.span`
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.colorGreen};
`;
