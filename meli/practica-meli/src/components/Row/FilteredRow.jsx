import styled from "styled-components";

const Row = styled(
  ({ flexDirection, justifyContent, alignItems, gap, ...rest }) => (
    <div {...rest} />
  )
)`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: ${(props) => props.gap || "0"};
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export default function FilteredRow({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
}) {
  return (
    <Row
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
    >
      {children}
    </Row>
  );
}
