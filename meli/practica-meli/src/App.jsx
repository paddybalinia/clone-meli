import "./App.css";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/GridContainer";
import FilteredRow from "./components/Row/FilteredRow";
// import "./index.css";
import GlobalStyle from "./GlobalStyles.jsx";

// import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FilteredRow>
        <Grid columns={4} gap={20}></Grid>
      </FilteredRow>
    </>
  );
}

export default App;
