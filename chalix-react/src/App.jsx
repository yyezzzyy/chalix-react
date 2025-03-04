import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
    </>
  );
}

export default App;
