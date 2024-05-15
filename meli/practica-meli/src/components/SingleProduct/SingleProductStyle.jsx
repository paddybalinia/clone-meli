import styled from "styled-components";

export const ContentStyle = styled.div`
  margin: 40px auto;
  background-color: white;
  padding: 20px;
  max-width: 1200px;
  box-sizing: border-box;
`;

export const ProductStyle = styled.div`
  display: flex;
  gap: 40px;
`;

export const FigureStyle = styled.figure`
  display: flex;
  gap: 20px;
  height: 600px;
  flex: 0 0 60%;
`;
export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductLabel = styled.span`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.colorText300};
`;

export const ProductTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`;

export const ProductButton = styled.button`
  background-color: ${(props) => props.theme.colors.colorSecondary};
  color: white;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  display: block;
  padding: 16px 20px;
  border-radius: 4px;
  max-width: 250px;
  width: 100%;
`;

export const ProductDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

export const ProductDetailsTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 27px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.colorTextDark};
`;

export const ProductDetailsText = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.colorText300};
`;
