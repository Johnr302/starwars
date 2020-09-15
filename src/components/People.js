import React, { useEffect } from "react";
import { fetchRequest } from "../shared/service.js";

const Person = (props) => {
  const { name, height } = { ...props };
  return (
    <p>
      {name} {height}cm <hr />
    </p>
  );
};

function People() {
  //   const [name, setName] = React.useState(null);
  //   const [height, setHeight] = React.useState(null);
  const [array1, setArray1] = React.useState([]);
  const [next, setNext] = React.useState(null);
  const [previous, setPrevious] = React.useState(null);

  const clickHandlerNext = (event, nextURL) => {
    console.log("clicking");
    fetchRequest(nextURL, (data) => {
      setArray1(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  };

  const clickHandlerPrev = (event, nextURL) => {
    fetchRequest(nextURL, (data) => {
      setArray1(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  };

  useEffect(() => {
    fetchRequest("https://swapi.dev/api/people/", (data) => {
      setArray1(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    });
  }, []);

  return (
    <div>
      {array1.map((list) => {
        return <Person name={list.name} height={list.height} />;
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

export default People;
