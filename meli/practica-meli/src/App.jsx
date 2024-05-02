import "./App.css";
import Header from "./components/Header/Header";

import GlobalStyle from "./GlobalStyles.jsx";

import Home from "./layout/Home.jsx";
import Search from "./layout/Seach.jsx";

function App() {
  const getUrl = window.location.pathname;

  return (
    <>
      <GlobalStyle />
      <Header />

      {getUrl == "/" ? <Home /> : <Search />}
    </>
  );
}

export default App;
