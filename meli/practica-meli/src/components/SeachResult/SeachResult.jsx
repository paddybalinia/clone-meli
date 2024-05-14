import { Link } from "react-router-dom";
import Grid from "../Grid/GridContainer";
import FilteredRow from "../Row/FilteredRow";
import Image from "../Image/Image";

import IconFull from "../Icons/Full";
import {
  FigureStyle,
  ItemData,
  ItemInstallments,
  ItemPrice,
  ItemShipping,
  ItemTitle,
  SeachResultStyle,
  StyledItem,
} from "./SeachResultStyle";

export default function SearchResult({ ...params }) {
  const data = params.data;
  const query =
    data && typeof data.query === "string" ? data.query.substring(1) : "";

  return (
    <>
      {data && <h1>Restuldado de busueda {query}</h1>}
      <SeachResultStyle>
        {data && (
          <FilteredRow gap={0}>
            <Grid columns={1} gap={15}>
              {data.results.map(
                (
                  {
                    id,
                    title,
                    thumbnail,
                    price,
                    shipping,
                    installments,
                  } = data.results
                ) => (
                  <StyledItem key={id}>
                    <FigureStyle>
                      <Link
                        to={`/items/${id}`}
                        title={title}
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={thumbnail}
                          width={300}
                          height={300}
                          title={title}
                          alt={title}
                        />
                      </Link>
                    </FigureStyle>

                    <ItemData>
                      <ItemTitle>
                        <Link
                          to={`/items/${id}`}
                          title={title}
                          rel="noopener noreferrer"
                        >
                          {title}
                        </Link>
                      </ItemTitle>

                      <ItemPrice>
                        <Link
                          to={`/items/${id}`}
                          title={title}
                          rel="noopener noreferrer"
                        >
                          ${price}
                        </Link>
                      </ItemPrice>

                      <ItemInstallments>
                        <Link
                          to={`/items/${id}`}
                          title={title}
                          rel="noopener noreferrer"
                        >
                          {installments && " En " + installments.quantity}

                          {installments && " de $" + installments.amount}
                        </Link>
                      </ItemInstallments>

                      <ItemShipping>
                        {shipping.free_shipping && (
                          <>
                            <span>Llega gratis mañana</span>
                            <IconFull />
                          </>
                        )}
                      </ItemShipping>
                    </ItemData>
                  </StyledItem>
                )
              )}
            </Grid>
          </FilteredRow>
        )}
      </SeachResultStyle>
    </>
  );
}
