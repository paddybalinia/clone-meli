import styled from "styled-components";

const ModuleStyle = styled.div`
  background: white;
  border-radius: 5px;
  width: 100%;
`;

export default function Module({ children }) {
  return <ModuleStyle>{children}</ModuleStyle>;
}
