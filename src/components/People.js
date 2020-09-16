import React, { useState, useEffect } from "react";
import { fetchRequest } from "../shared/service.js";

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

export default People;
