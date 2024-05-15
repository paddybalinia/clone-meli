import styled from "styled-components";

const ModuleStyle = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;
const ModuleTitle = styled.h3`
  margin: 0 0 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;

export default function Module({ children, title }) {
  return (
    <ModuleStyle>
      {title && <ModuleTitle>{title}</ModuleTitle>}

      {children}
    </ModuleStyle>
  );
}
