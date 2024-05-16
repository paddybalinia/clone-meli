import styled from "styled-components";
import Module from "../Module/Module";

const GridContainer = styled(({ columns, gap, ...rest }) => <div {...rest} />)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${(props) => props.gap}px;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

export default function Grid({ columns, gap, children, title }) {
  return (
    <Module title={title}>
      <GridContainer columns={columns} gap={gap}>
        {children}
      </GridContainer>
    </Module>
  );
}
