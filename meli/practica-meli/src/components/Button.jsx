// import React from "react";
import styled from "styled-components";

// Define un componente de estilo usando styled-components
const StyledButton = styled.button`
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

// Componente funcional que usa el componente de estilo
const Button = () => {
  return <StyledButton>Click asas</StyledButton>;
};

export default Button;
