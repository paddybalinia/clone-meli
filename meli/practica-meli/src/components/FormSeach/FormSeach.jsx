import styled from "styled-components";

const FormStyle = styled.form`
  background: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 592px;
`;

const FormSeach = ({ children }) => {
  return <FormStyle>{children}</FormStyle>;
};

export default FormSeach;
