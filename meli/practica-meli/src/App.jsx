import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";

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
        <Header />
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
