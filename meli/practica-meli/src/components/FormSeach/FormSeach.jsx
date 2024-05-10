import styled from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconSearch from "../Icons/Seach";

const FormStyle = styled.form`
  background: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (min-width: 768px) {
    max-width: 592px;
  }
`;

// Estilos para el elemento hijo
const StyledInput = styled.input`
  border: 0;
  background: transparent;
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
export default function FormSeach() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search") || "";
  const [valueInput, setValueInput] = useState(searchValue);

  const onHandleSubmit = (event) => {
    event.preventDefault();

    navigate(`/items?search=${valueInput}`, { replace: true });
  };
  return (
    <FormStyle onSubmit={onHandleSubmit}>
      <StyledInput
        type="text"
        name="search"
        value={valueInput}
        placeholder="Buscar productos, marcas y más..."
        onChange={(e) => setValueInput(e.target.value)}
      ></StyledInput>
      <StyledButton type="submit">
        <IconSearch width={17} height={18} fill="#707070"></IconSearch>
      </StyledButton>
    </FormStyle>
  );
}
