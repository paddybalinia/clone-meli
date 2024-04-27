import CardProduct from "../CardProduct/CardProdct";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import styled from "styled-components";

import useFetchData from "../../hooks/useFetchData";

const BlockHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  margin: 40px 0;
`;

export default function BlockHome() {
  const { data: items } = useFetchData(
    `https://api.mercadolibre.com/sites/MLA/search?q=:Apple?limit=4#json`
  );
  const { data: items2 } = useFetchData(
    `https://api.mercadolibre.com/sites/MLA/search?q=:termo?limit=4#json`
  );

  return (
    <BlockHomeStyled>
      <FilteredRow>
        <Grid columns={6} gap={13} title="Más vendidos en la semana">
          {items2 &&
            items2
              .slice(0, 6)
              .map(({ id, thumbnail, title, price }) => (
                <CardProduct
                  key={id}
                  src={thumbnail}
                  title={title}
                  price={price}
                />
              ))}
        </Grid>
      </FilteredRow>

      <FilteredRow gap="20">
        {/* <Grid columns={1} gap={13} title="Oferta">
          {items &&
            items
              .slice(0, 1)
              .map(({ id, thumbnail, title, price }) => (
                <CardProduct
                  key={id}
                  src={thumbnail}
                  title={title}
                  price={price}
                />
              ))}
        </Grid> */}
        <Grid columns={6} gap={13} title="Más vendidos en la semana">
          {items &&
            items
              .slice(0, 6)
              .map(
                ({
                  id,
                  thumbnail,
                  title,
                  price,
                  shipping,
                  installments,
                  discounts,
                }) => (
                  <CardProduct
                    key={id}
                    src={thumbnail}
                    title={title}
                    price={price}
                    shipping={shipping}
                    installments={installments}
                    discounts={discounts}
                  />
                )
              )}
        </Grid>
      </FilteredRow>
    </BlockHomeStyled>
  );
}
