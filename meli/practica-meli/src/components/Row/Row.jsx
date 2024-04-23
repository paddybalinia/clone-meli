import styled from "styled-components";

// Define un componente de estilo usando styled-components
const RowStyle = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 70px;
  width: 100%;
`;

export default function Row({ children }) {
  return <RowStyle>{children}</RowStyle>;
}
