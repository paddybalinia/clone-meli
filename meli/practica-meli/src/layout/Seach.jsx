import Grid from "../components/Grid/GridContainer";
import FilteredRow from "../components/Row/FilteredRow";
import respondeSeach from "../mocks/seachResult.json";

export default function Search() {
  const busqueda = respondeSeach.results;
  const hasResult = busqueda.length;

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  };
  return (
    <>
      <FilteredRow>
        <Grid columns={1} gap={0}>
          <h3>Resultado de busqueda {busqueda.length}</h3>
          {hasResult ? (
            busqueda.map((item) => (
              <div key={item.id}>
                <img
                  src={item.thumbnail}
                  width="300"
                  height="300"
                  title={item.title}
                  alt={item.title}
                />
                <div style={styles.container}>
                  <h3>{item.title}</h3>
                  <span>{item.price}</span>

                  <span>{item.shipping.free_shipping && " tiene envio"}</span>
                  <span>
                    {item.installments &&
                      " Y cuotas " + item.installments.quantity}
                  </span>
                  <span>
                    {item.installments &&
                      " precio de cuota " + item.installments.amount}
                  </span>
                </div>
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
