import { Link } from "react-router-dom";
import Grid from "../components/Grid/GridContainer";
import FilteredRow from "../components/Row/FilteredRow";
import respondeSeach from "../mocks/seachResult.json";
import styled from "styled-components";
import Image from "../components/Image/Image";
import IconFull from "../components/Icons/Full";

export const SeachResult = styled.div`
  margin: 40px auto;
`;

export const StyledItem = styled.div`
  display: flex;
  min-width: 1160px;
`;

export const FigureStyle = styled.figure`
  position: relative;
  width: 240px;
`;
export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const ItemTitle = styled.h3`
  color: ${(props) => props.theme.colors.colorTextDark};
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
`;
export const ItemPrice = styled.span`
  color: ${(props) => props.theme.colors.colorTextDark};

  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-right: 8px;
`;
export const ItemInstallments = styled.span`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.colorGreen};
`;
export const ItemShipping = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  gap: 8px;
  color: ${(props) => props.theme.colors.colorGreen};
`;

export default function Search() {
  const busqueda = respondeSeach.results;
  const hasResult = busqueda.length;

  return (
    <>
      <SeachResult>
        <FilteredRow gap={0}>
          <Grid columns={1} gap={15}>
            <h3>Resultado de busqueda {busqueda.length}</h3>
            {hasResult ? (
              busqueda.map(
                ({
                  id,
                  title,
                  thumbnail,
                  price,
                  shipping,
                  installments,
                } = busqueda) => (
                  <StyledItem key={id}>
                    <FigureStyle>
                      <Link
                        to={`/items/:${id}`}
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
                          to={`/items/:${id}`}
                          title={title}
                          rel="noopener noreferrer"
                        >
                          {title}
                        </Link>
                      </ItemTitle>

                      <ItemPrice>
                        <Link
                          to={`/items/:${id}`}
                          title={title}
                          rel="noopener noreferrer"
                        >
                          ${price}
                        </Link>
                      </ItemPrice>

                      <ItemInstallments>
                        <Link
                          to={`/items/:${id}`}
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
              )
            ) : (
              <p> No se encontraron resultados</p>
            )}
          </Grid>
        </FilteredRow>
      </SeachResult>
    </>
  );
}
