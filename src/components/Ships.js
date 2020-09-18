import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";
import { Button } from "reactstrap";

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
        <Button
          outline
          color="warning"
          gst
          onClick={(event) => {
            fetchRequest(next, setData);
          }}
        >
          Next
        </Button>
      ) : (
        ""
      )}
      {previous ? (
        <Button
          outline
          color="warning"
          onClick={(event) => {
            fetchRequest(previous, setData);
          }}
        >
          Prev
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Ships;
