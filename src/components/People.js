import React, { useState, useEffect } from "react";
import { fetchRequest } from "../shared/service.js";
import { Button } from "reactstrap";

const Person = (props) => {
  const { name, height } = { ...props };
  return (
    <div>
      <p>
        {name} {height}cm
      </p>
      <hr />
    </div>
  );
};

function People() {
  //   const [name, setName] = React.useState(null);
  //   const [height, setHeight] = React.useState(null);
  const [array1, setArray1] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const setData = (data) => {
    setArray1(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  useEffect(() => {
    fetchRequest("https://swapi.dev/api/people/", setData);
  }, []);

  return (
    <div>
      {array1.map((list, index) => {
        return <Person key={index} name={list.name} height={list.height} />;
      })}
      {next ? (
        <Button
          outline
          color="success"
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
          color="success"
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

export default People;
