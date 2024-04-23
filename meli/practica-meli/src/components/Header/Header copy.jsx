import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import Row from "../Row/Row";
import FormSeach from "../FormSeach/FormSeach";

// Define un componente de estilo usando styled-components
const HeaderStyle = styled.header`
  background-color: #ffe600;
  font-family: "ProximaNova", Arial, Helvetica, sans-serif;
  display: flex;
  padding: 10px 0;
  width: 100%;
`;

// Estilos para el elemento hijo
const StyledInput = styled.input`
  border: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  padding: 5px 10px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

// Estilos para el elemento hijo
const StyledButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: #707070;
  width: 43px;
  height: 43px;
  padding: 0 22px 0 0;

  & svg {
    width: 19px;
  }
`;

// Componente funcional que usa el componente de estilo
const Header = () => {
  return (
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
            <svg
              className="svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </StyledButton>
        </FormSeach>
      </Row>
    </HeaderStyle>
  );
};
export default Header;
