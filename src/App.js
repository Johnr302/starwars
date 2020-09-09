import React from "react";
import "./App.css";
import MakeList from "./components/People";
import MakeShip from "./components/Ships";
import MakePlanet from "./components/Planets";
function App() {
  return (
    <div className="App">
      <section id="people" class="lists">
        <MakeList />
      </section>
      <section id="ship" class="lists">
        <MakeShip />
      </section>
      <section id="ship" class="lists">
        <MakePlanet />
      </section>
    </div>
  );
}

export default App;
