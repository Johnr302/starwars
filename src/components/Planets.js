import React, { useEffect } from "react";

const Planet = (props) => {
  const { name } = { ...props };
  return (
    <p>
      Planet: {name}
      <hr />
    </p>
  );
};

function MakePlanet() {
  const [planetArray, setPlanetArray] = React.useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setPlanetArray(data.results);
      });
  }, []);

  return planetArray.map((list) => {
    return <Planet name={list.name} />;
  });
}

export default MakePlanet;
