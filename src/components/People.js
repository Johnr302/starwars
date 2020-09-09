import React, { useEffect } from "react";

const List = (props) => {
  const { name, height } = { ...props };
  return (
    <p>
      {name} {height}cm <hr />
    </p>
  );
};

function MakeList() {
  //   const [name, setName] = React.useState(null);
  //   const [height, setHeight] = React.useState(null);
  const [array1, setArray1] = React.useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setArray1(data.results);
      });
  }, []);

  return array1.map((list) => {
    return <List name={list.name} height={list.height} />;
  });
}

export default MakeList;
