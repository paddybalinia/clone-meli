import "./App.css";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/GridContainer";
import FilteredRow from "./components/Row/FilteredRow";
import GlobalStyle from "./GlobalStyles.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FilteredRow>
        <Grid columns={4} gap={13}></Grid>
      </FilteredRow>
    </>
  );
}

export default App;
