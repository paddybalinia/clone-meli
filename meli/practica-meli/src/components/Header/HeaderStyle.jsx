import styled from "styled-components";
import IconLogo from "../Icons/Logo";
import IconLogoDesktop from "../Icons/LogoDesktop";

// Define un componente de estilo usando styled-components
export const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  font-family: ${(props) => props.theme.fonts.primary};
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 10px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 25px;
  }
`;
export const HeaderRowStyle = styled(
  ({ flexDirection, justifyContent, alignItems, gap, ...rest }) => (
    <div {...rest} />
  )
)`
  display: flex;

  flex-direction: row;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
  gap: 0;
  width: 100%;

  @media (min-width: 768px) {
    gap: ${(props) => props.gap + "px" || "0"};
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    flex-direction: ${(props) => props.flexDirection || "row"};
    width: 100%;
  }
`;

export const RowStyle = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  gap: ${(props) => (props.gap ? props.gap + "px" : "0")};
  display: ${(props) => props.displayType || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  width: 100%;
`;

export const TextLocation = styled.span`
  color: ${(props) => props.theme.colors.colorText300};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const BoxLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    & svg {
      width: 16px;
      height: auto;
    }
  }
`;

export const NavPrimary = styled.nav`
  display: flex;
  gap: 24px;
  font-size: 14px;
  line-height: 18px;
  display: none;

  @media (min-width: 1050px) {
    display: flex;
  }
`;

export const NavPrimaryText = styled.a`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-weight: 400;
  &:hover {
    color: rgba(51, 51, 51, 0.9);
  }
`;

export const NavSecondary = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 14px;
  line-height: 18px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavSecondaryText = styled.a`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-weight: 400;

  &:hover {
    color: rgba(51, 51, 51, 0.9);
  }
`;

export const IconLogoStyle = styled(IconLogo)`
  margin: 0 15px 0 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const IconLogoDesktopStyle = styled(IconLogoDesktop)`
  display: none;
  margin: 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LinkCart = styled.a`
  color: ${(props) => props.theme.colors.colorTextDark};
`;
