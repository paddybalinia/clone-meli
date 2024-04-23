import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header/Header";
import Row from "./components/Row/Row";
// import styled from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Row></Row>
      </ThemeProvider>
    </>
  );
}

export default App;
