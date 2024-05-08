import "./App.css";
import GlobalStyle from "./GlobalStyles.jsx";

import Home from "./layout/Home.jsx";
import Search from "./layout/Seach.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Product } from "./layout/Product.jsx";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Search />} />
          <Route path="/items/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
