// reusable method that components can use to make a api request to a url
// that then runs a custom function on the data that gets returned

const fetchRequest = (url, customThenFunction) => {
  fetch(url)
    .then((response) => response.json())
    .then(customThenFunction);
};

// const clickHandlerNext = (event, nextURL) => {
//   console.log("clicking");
//   fetchRequest(nextURL, (data) => {
//     setArray1(data.results);
//     setNext(data.next);
//     setPrevious(data.previous);
//   });
// };

// const clickHandlerPrev = (event, nextURL) => {
//   fetchRequest(nextURL, (data) => {
//     setArray1(data.results);
//     setNext(data.next);
//     setPrevious(data.previous);
//   });
// };

export { fetchRequest };
