import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";

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
  const [next, setNext] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);

  const clickHandlerNext = (event, nextURL) => {
    console.log("clicking");
    fetchRequest(nextURL, (data) => {
      setPlanetArray(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  };

  const clickHandlerPrev = (event, nextURL) => {
    fetchRequest(nextURL, (data) => {
      setPlanetArray(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  };

  useEffect(() => {
    fetchRequest("https://swapi.dev/api/starships/", (data) => {
      setPlanetArray(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  }, []);

  return (
    <div>
      {planetArray.map((list) => {
        return <Planet name={list.name} />;
      })}
      {next ? (
        <button
          onClick={(event) => {
            clickHandlerNext(event, next);
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
            clickHandlerPrev(event, previous);
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

export default MakePlanet;
