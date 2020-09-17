import React from "react";
import "./App.css";
import People from "./components/People";
import Ships from "./components/Ships";
import Planets from "./components/Planets";
function App() {
  return (
    <div className="App">
      <section id="people" className="lists">
        <People />
      </section>
      <section id="ship" className="lists">
        <Ships />
      </section>
      <section id="ship" className="lists">
        <Planets />
      </section>
    </div>
  );
}

export default App;
