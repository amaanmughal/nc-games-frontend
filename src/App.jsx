import { useState } from "react";
import "./App.css";
import GamesList from "./GamesList";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import SingleGame from "./SingleGame";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/reviews" element={<GamesList />} />
        <Route path="/reviews/:review_id" element={<SingleGame />} />
      </Routes>
    </>
  );
}

export default App;
