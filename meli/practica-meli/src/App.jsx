import "./App.css";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/GridContainer";
import FilteredRow from "./components/Row/FilteredRow";
import GlobalStyle from "./GlobalStyles.jsx";
import CardProduct from "./components/CardProduct/CardProdct.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FilteredRow>
        <Grid columns={6} gap={13}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Grid>
      </FilteredRow>

      <FilteredRow gap="20px">
        <Grid columns={1} gap={13} title="Oferta">
          <CardProduct />
        </Grid>
        <Grid columns={4} gap={13} title="Más vendidos en la semana">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Grid>
      </FilteredRow>
    </>
  );
}

export default App;
