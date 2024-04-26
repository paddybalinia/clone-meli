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

  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    gap: ${(props) => props.gap + "px" || "0"};
  }
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
