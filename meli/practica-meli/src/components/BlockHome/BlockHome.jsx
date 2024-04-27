import { useEffect } from "react";
import CardProduct from "../CardProduct/CardProdct";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import styled from "styled-components";
import { useState } from "react";

const BlockHomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  margin: 40px 0;
`;
const query = "termo";
const APIURL = `https://api.mercadolibre.com/sites/MLA/search?q=:${query}?limit=4#json`;

export default function BlockHome() {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIURL);
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <BlockHomeStyled>
      <FilteredRow>
        {/* <Grid columns={6} gap={13} title="Más vendidos en la semana">
          {items &&
            items.map(({ id, thumbnail, title, price }) => (
              <CardProduct
                key={id}
                src={thumbnail}
                title={title}
                price={price}
              />
            ))}
        </Grid> */}
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
