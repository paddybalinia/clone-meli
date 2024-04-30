import CardProduct from "../CardProduct/CardProdct";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import styled from "styled-components";

import useDataProducts from "../../hooks/useDataProducts";
import { useGetUrl } from "../../hooks/useGetUrl";

import DataTermo from "../../mocks/ResultTermos.json";
import DataOferta from "../../mocks/ResultOferta.json";
import DataApple from "../../mocks/ResultApple.json";

const BlockHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  margin: 40px 0;
`;

export default function BlockHome() {
  const appleProducts = useDataProducts(
    useGetUrl({
      API: "https://api.mercadolibre.com/sites/MLA/search?q=:",
      SEARCH: "apple",
      LIMIT: "4",
    })
  );

  const ListTermos = DataTermo.results;
  const ListOferta = DataOferta.results;
  const ListApple = DataApple.results;

  return (
    <BlockHomeStyled>
      <FilteredRow>
        <Grid columns={6} gap={13} title="Más vendidos en Termos">
          {ListTermos &&
            ListTermos.map((product) => (
              <CardProduct key={product.id} {...product} />
            ))}
        </Grid>
      </FilteredRow>

      <FilteredRow gap="20">
        <Grid columns={1} gap={13} title="Oferta">
          {ListOferta &&
            ListOferta.map((product) => (
              <CardProduct key={product.id} {...product} />
            ))}
        </Grid>
        <Grid columns={4} gap={13} title="Más vendidos en Apple">
          {ListApple &&
            ListApple.map((product) => (
              <CardProduct key={product.id} {...product} />
            ))}
        </Grid>
      </FilteredRow>
    </BlockHomeStyled>
  );
}