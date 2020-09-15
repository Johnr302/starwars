import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";

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
  const [next, setNext] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);

  const clickHandlerNext = (event, nextURL) => {
    console.log("clicking");
    fetchRequest(nextURL, (data) => {
      setShipArray(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  };

  const clickHandlerPrev = (event, nextURL) => {
    fetchRequest(nextURL, (data) => {
      setShipArray(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  };

  useEffect(() => {
    fetchRequest("https://swapi.dev/api/starships/", (data) => {
      setShipArray(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  }, []);

  return (
    <div>
      {shipArray.map((list) => {
        return <Ship name={list.name} model={list.model} />;
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

export default MakeShip;
