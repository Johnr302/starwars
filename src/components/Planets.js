import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";
import { Button } from "reactstrap";

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
        <Button
          outline
          color="danger"
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
          color="danger"
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

export default Planets;
