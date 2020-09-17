import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";

const Ship = (props) => {
  const { name, model } = { ...props };
  return (
    <div>
      <p>
        Ship: {name} Model: {model}
      </p>
      <hr />
    </div>
  );
};

function Ships() {
  const [shipArray, setShipArray] = React.useState([]);
  const [next, setNext] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);

  const setData = (data) => {
    setShipArray(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  useEffect(() => {
    fetchRequest("https://swapi.dev/api/starships/", setData);
  }, []);

  return (
    <div>
      {shipArray.map((list, index) => {
        return <Ship key={index} name={list.name} model={list.model} />;
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

export default Ships;
