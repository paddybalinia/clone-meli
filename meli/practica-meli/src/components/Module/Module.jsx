import styled from "styled-components";

const ModuleStyle = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  width: 100%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;
const ModuleTitle = styled.h2`
  margin: 0 0 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;

export default function Module({ children, title }) {
  return (
    <ModuleStyle>
      <ModuleTitle>{title}</ModuleTitle>
      {children}
    </ModuleStyle>
  );
}
