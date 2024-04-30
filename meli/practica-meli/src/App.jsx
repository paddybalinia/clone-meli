import "./App.css";
import Header from "./components/Header/Header";

import GlobalStyle from "./GlobalStyles.jsx";

import Home from "./layout/Home.jsx";
import Search from "./layout/Seach.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Home />
      {/* <Search /> */}
    </>
  );
}

export default App;
