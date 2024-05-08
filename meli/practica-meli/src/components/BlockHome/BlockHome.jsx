import CardProduct from "../CardProduct/CardProdct";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import styled from "styled-components";

// import DataTermo from "../../mocks/ResultTermos.json";
// import DataOferta from "../../mocks/ResultOferta.json";
// import DataApple from "../../mocks/ResultApple.json";
import { useFetchData } from "../../services/fetchData";
import Header from "../Header/Header";

const BlockHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  margin: 40px 0;
`;

export default function BlockHome() {
  // sites/MLA/search?q=:query
  const datos = ["termos", "apple", "macbook"];

  const { data: data1 } = useFetchData(
    `sites/MLA/search?q=${datos[0]}&limit=6`
  );
  const { data: data2 } = useFetchData(
    `sites/MLA/search?q=${datos[1]}&limit=4`
  );
  const { data: data3 } = useFetchData(
    `sites/MLA/search?q=${datos[2]}&limit=1`
  );

  // const ListTermos = data1.results;
  // const ListTermos = DataTermo.results;
  // const ListOferta = DataOferta.results;
  // const ListApple = DataApple.results;

  return (
    <>
      <Header />
      <BlockHomeStyled>
        {data1 && (
          <FilteredRow>
            <Grid columns={6} gap={13} title="Más vendidos en Termos">
              {data1.results &&
                data1.results.map((product) => (
                  <CardProduct key={product.id} {...product} />
                ))}
            </Grid>
          </FilteredRow>
        )}
        <FilteredRow gap="20">
          {data3 && (
            <Grid columns={1} gap={13} title="Oferta">
              {data3.results &&
                data3.results.map((product) => (
                  <CardProduct key={product.id} {...product} />
                ))}
            </Grid>
          )}
          {data2 && (
            <Grid columns={4} gap={13} title="Más vendidos en Apple">
              {data2.results &&
                data2.results.map((product) => (
                  <CardProduct key={product.id} {...product} />
                ))}
            </Grid>
          )}
        </FilteredRow>
      </BlockHomeStyled>
    </>
  );
}
