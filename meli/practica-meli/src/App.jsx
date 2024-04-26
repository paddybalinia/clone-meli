import "./App.css";
import Header from "./components/Header/Header";

import GlobalStyle from "./GlobalStyles.jsx";

import BlockHome from "./components/BlockHome/BlockHome.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BlockHome />
    </>
  );
}

export default App;
