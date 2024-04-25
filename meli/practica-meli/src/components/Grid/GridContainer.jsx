import styled from "styled-components";
import Module from "../Module/Module";

const GridContainer = styled(({ columns, gap, ...rest }) => <div {...rest} />)`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap}px;
  width: 100%;
`;

const GridItem = styled.div`
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
`;

export default function Grid({ columns, gap }) {
  return (
    <Module title="Titulo">
      <GridContainer columns={columns} gap={gap}>
        <GridItem>1</GridItem>
        <GridItem>1</GridItem>
        <GridItem>1</GridItem>
        <GridItem>1</GridItem>
      </GridContainer>
    </Module>
  );
}
