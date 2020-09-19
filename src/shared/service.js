// reusable method that components can use to make a api request to a url
// that then runs a custom function on the data that gets returned

const fetchRequest = (url, customThenFunction) => {
  url.replace(/https|http/gi, "https");
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then(customThenFunction);
};

export { fetchRequest };
