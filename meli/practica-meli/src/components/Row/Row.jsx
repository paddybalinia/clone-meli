import styled from "styled-components";

export const RowStyle = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  gap: ${(props) => (props.gap ? props.gap + "px" : "0")};
  display: ${(props) => props.displayType || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  width: 100%;
`;

// export default function Row() {
//   return <RowStyle></RowStyle>;
// }

// export function FilteredRow({
//   flexDirection,
//   justifyContent,
//   alignItems,
//   childen
//   ...rest
// }) {
//   return <Row {...rest}>{childen}</Row>;
// }

export default function FilteredRow({
  flexDirection,
  justifyContent,
  alignItems,
  ...rest
}) {
  return <RowStyle {...rest}>{children}</RowStyle>;
}
