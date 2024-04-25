import styled from "styled-components";
import Module from "../Module/Module";
import CardProduct from "../CardProduct/CardProdct";

const GridContainer = styled(({ columns, gap, ...rest }) => <div {...rest} />)`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap}px;
  width: 100%;
`;

export default function Grid({ columns, gap }) {
  return (
    <Module title="Más vendidos en la semana">
      <GridContainer columns={columns} gap={gap}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </GridContainer>
    </Module>
  );
}
