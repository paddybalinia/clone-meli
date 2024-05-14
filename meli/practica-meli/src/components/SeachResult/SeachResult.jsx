import { Link } from "react-router-dom";
import Image from "../Image/Image";

import IconFull from "../Icons/Full";
import {
  AsideStyle,
  ColLeftStyle,
  FigureStyle,
  ItemData,
  ItemInstallments,
  ItemPrice,
  ItemShipping,
  ItemTitle,
  SeachResultStyle,
  StyledItem,
  TextResult,
  TitleResult,
} from "./SeachResultStyle";

export default function SearchResult({ ...params }) {
  const data = params.data;
  const query =
    data && typeof data.query === "string" ? data.query.substring(1) : "";

  console.log(data);
  return (
    <>
      <SeachResultStyle>
        <ColLeftStyle>
          {data && (
            <>
              <TitleResult> {query}</TitleResult>
              <TextResult>{data.paging.total} resultados</TextResult>
            </>
          )}
        </ColLeftStyle>
        <AsideStyle>
          {data && (
            <div>
              <div>
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
              </div>
            </div>
          )}
        </AsideStyle>
      </SeachResultStyle>
    </>
  );
}
