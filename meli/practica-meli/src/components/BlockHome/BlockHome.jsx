import CardProduct from "../CardProduct/CardProdct";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import styled from "styled-components";

const BlockHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  margin: 40px 0;
`;

export default function BlockHome() {
  return (
    <BlockHomeStyled>
      <FilteredRow>
        <Grid columns={6} gap={13} title="Más vendidos en la semana">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Grid>
      </FilteredRow>

      <FilteredRow gap="20">
        <Grid columns={1} gap={13} title="Oferta">
          <CardProduct />
        </Grid>
        <Grid columns={4} gap={13} title="Más vendidos en la semana">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Grid>
      </FilteredRow>
    </BlockHomeStyled>
  );
}
