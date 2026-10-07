//assign variables to the DOM element
const inputField = document.querySelector(".input-field");
const searchBtn = document.querySelector(".search-button");
const output = document.querySelector(".output");

//added click event listener to listen button
searchBtn.addEventListener("click", (e) => {
  let searchTerm = inputField.value;
  //wikipedia API url
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchTerm}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
