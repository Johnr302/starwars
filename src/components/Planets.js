import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";

const Planet = (props) => {
  const { name } = { ...props };
  return (
    <div>
      <p>Planet: {name}</p>
      <hr />
    </div>
  );
};

function Planets() {
  const [planetArray, setPlanetArray] = React.useState([]);
  const [next, setNext] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);

  const setData = (data) => {
    setPlanetArray(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  useEffect(() => {
    fetchRequest("https://swapi.dev/api/starships/", setData);
  }, []);

  return (
    <div>
      {planetArray.map((list, index) => {
        return <Planet key={index} name={list.name} />;
      })}
      {next ? (
        <button
          onClick={(event) => {
            fetchRequest(next, setData);
          }}
        >
          Next
        </button>
      ) : (
        ""
      )}
      {previous ? (
        <button
          onClick={(event) => {
            fetchRequest(previous, setData);
          }}
        >
          Prev
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Planets;
