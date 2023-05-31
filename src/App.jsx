import { useState } from "react";
import "./App.css";
import Header from "./Header";
import GamesList from "./GamesList";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <GamesList />
    </>
  );
}

export default App;
