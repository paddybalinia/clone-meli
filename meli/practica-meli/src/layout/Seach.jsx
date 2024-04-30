import Grid from "../components/Grid/GridContainer";
import FilteredRow from "../components/Row/FilteredRow";
import respondeSeach from "../mocks/seachResult.json";

export default function Search() {
  const busqueda = respondeSeach.results;
  const hasResult = busqueda.length;

  return (
    <>
      <FilteredRow>
        <Grid>
          <h3>Resultado de busqueda {busqueda.length}</h3>
          {hasResult ? (
            busqueda.map((item) => (
              <div key={item.id}>
                {item.thumbnail}
                {item.title}
                {item.price}
                {item.shipping.free_shipping && " tiene envio"}
                {item.installments && " Y cuotas " + item.installments.quantity}
                {item.installments &&
                  " precio de cuota " + item.installments.amount}
              </div>
            ))
          ) : (
            <p> No se encontraron resultados</p>
          )}
        </Grid>
      </FilteredRow>
    </>
  );
}
