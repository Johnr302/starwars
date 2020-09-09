import React, { useEffect } from "react";

const Ship = (props) => {
  const { name, model } = { ...props };
  return (
    <p>
      Ship: {name} Model: {model}
      <hr />
    </p>
  );
};

function MakeShip() {
  const [shipArray, setShipArray] = React.useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setShipArray(data.results);
      });
  }, []);

  return shipArray.map((list) => {
    return <Ship name={list.name} model={list.model} />;
  });
}

export default MakeShip;
