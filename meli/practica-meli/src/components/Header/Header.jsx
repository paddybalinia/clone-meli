import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import Row from "../Row/Row";
import FormSeach from "../FormSeach/FormSeach";

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

  & svg {
    width: 19px;
  }
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
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8939 17.0561L16 17.1621L16.106 17.0561L16.606 16.5561L16.7121 16.45L16.606 16.3439L10.4545 10.1924C10.8258 9.7481 11.1288 9.21786 11.365 8.60383C11.6215 7.93699 11.75 7.25209 11.75 6.54999C11.75 4.97387 11.2014 3.63445 10.1059 2.54095C9.01056 1.44753 7.67083 0.899988 6.0959 0.899988C4.52089 0.899988 3.18242 1.44856 2.0897 2.54406L2.0897 2.54406C0.997093 3.63945 0.449976 4.97917 0.449976 6.55406C0.449976 8.12899 0.99753 9.46743 2.09107 10.5602C3.1846 11.6529 4.52398 12.2 6.09998 12.2C6.75208 12.2 7.41087 12.0798 8.07566 11.8412C8.69665 11.6182 9.25225 11.3058 9.74139 10.9035L15.8939 17.0561ZM9.40641 9.85642C8.51053 10.7523 7.41162 11.2 6.09998 11.2C4.78834 11.2 3.68942 10.7523 2.79354 9.85642C1.89766 8.96054 1.44998 7.86163 1.44998 6.54999C1.44998 5.23835 1.89766 4.13943 2.79354 3.24355C3.68942 2.34767 4.78834 1.89999 6.09998 1.89999C7.41162 1.89999 8.51053 2.34767 9.40641 3.24355C10.3023 4.13943 10.75 5.23835 10.75 6.54999C10.75 7.86163 10.3023 8.96054 9.40641 9.85642Z"
                  fill="#707070"
                  stroke="#707070"
                  strokeWidth="0.3"
                />
              </svg>
            </StyledButton>
          </FormSeach>
        </Row>
      </HeaderStyle>
    </>
  );
}
