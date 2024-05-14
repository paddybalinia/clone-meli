import styled from "styled-components";
export const SeachResultStyle = styled.main`
  display: flex;
  gap: 20px;

  max-width: 1220px;
  margin: 40px auto;

  display: flex;
  flex-direction: row;

  width: 100%;
`;
export const AsideStyle = styled.aside`
  background-color: white;
  display: flex;
  padding: 25px 20px;
`;
export const ColLeftStyle = styled.div`
  flex: 231px;
`;
export const TextResult = styled.span`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-size: 14px;
  font-weight: 300;
  line-height: 1.3;
`;
export const TitleResult = styled.h1`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 1.3;
`;
export const StyledItem = styled.div`
  display: flex;
`;

export const FigureStyle = styled.figure`
  position: relative;
  width: 240px;
`;
export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const ItemTitle = styled.h3`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
`;
export const ItemPrice = styled.span`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-right: 8px;
`;
export const ItemInstallments = styled.span`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.colorGreen};
`;
export const ItemShipping = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  gap: 8px;
  color: ${(props) => props.theme.colors.colorGreen};
`;
