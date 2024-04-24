import styled from "styled-components";

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
export default function FormSeach({ children }) {
  return <FormStyle>{children}</FormStyle>;
}
