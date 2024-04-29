import CardProduct from "../CardProduct/CardProdct";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import styled from "styled-components";

import useDataProducts from "../../hooks/useDataProducts";
import { useGetUrl } from "../../hooks/useGetUrl";

const BlockHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  margin: 40px 0;
`;

export default function BlockHome() {
  const { data: items } = useDataProducts(
    useGetUrl({
      API: "https://api.mercadolibre.com/sites/MLA/search?q=:",
      SEARCH: "apple",
      LIMIT: "4",
    })
  );
  const { data: items2 } = useDataProducts(
    useGetUrl({
      API: "https://api.mercadolibre.com/sites/MLA/search?q=:",
      SEARCH: "oferta",
      LIMIT: "6",
    })
  );
  const { data: items3 } = useDataProducts(
    useGetUrl({
      API: "https://api.mercadolibre.com/sites/MLA/search?q=:",
      SEARCH: "apple",
      LIMIT: "1",
    })
  );

  return (
    <BlockHomeStyled>
      <FilteredRow>
        <Grid columns={6} gap={13} title="Más vendidos en la semana">
          {items2 &&
            items2.map(({ id, thumbnail, title, price }) => (
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
        <Grid columns={1} gap={13} title="Oferta">
          {items3 &&
            items3.map(
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
        <Grid columns={4} gap={13} title="Más vendidos en la semana">
          {items &&
            items.map(
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
