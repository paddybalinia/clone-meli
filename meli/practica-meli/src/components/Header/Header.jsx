import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import Row from "../Row/Row";
import FormSeach from "../FormSeach/FormSeach";
import IconSearch from "../Icons/Seach";

// Define un componente de estilo usando styled-components
const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  font-family: "ProximaNova", Arial, Helvetica, sans-serif;
  display: flex;
  padding: 10px 0;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

// Estilos para el elemento hijo
const StyledInput = styled.input`
  border: 0;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.colorText300};
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 60px 10px 15px;
  width: 100%;
  &::placeholder {
    color: ${(props) => props.theme.colors.colorText300};
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const StyledButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: #707070;
  height: 40px;
  padding: 0 14px 0 13px;
  position: relative;

  &:before {
    content: "";
    display: block;
    height: 26px;
    border-left: 1px solid #e6e6e6;
    position: absolute;
    top: 6.5px;
    left: 0;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <Row>
          <img
            src={Logo}
            className="logo"
            title="Logo ML"
            alt="Logo ML"
            width={158}
            height={38}
          />
          <FormSeach>
            <StyledInput placeholder="Buscar productos, marcas y más..."></StyledInput>
            <StyledButton>
              <IconSearch width={17} height={18}></IconSearch>
            </StyledButton>
          </FormSeach>
        </Row>
      </HeaderStyle>
    </>
  );
}
