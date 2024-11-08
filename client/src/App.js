import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import WritePage from "./WritePage";

import "./App.css";



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element = { <MainPage />} />
          <Route path="write" element={ <WritePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
