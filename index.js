//assign variables to the DOM element
const inputField = document.querySelector(".input-field");
inputField.value = "Hello";
const searchBtn = document.querySelector(".search-button");
const output = document.querySelector(".output");
//wikipedia API url
const url =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=hello";

//added click event listener to listen button
searchBtn.addEventListener("click", (e) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.query.search);
      
      //more simplified version to get main data from API
      displayOutput(data.query.search);
    })
    .catch((error) => {
      console.log(error);
    });
});

//function to display the output on to the page
function displayOutput(data) {
  console.log(data);
  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML += `<h3><a href="https://en.wikipedia.org/wiki?curid=${item.pageid}" target="_blank">${item.title}</a></h3>`;
    div.innerHTML += `<div>Page ID ${item.pageid} | Size ${item.size} | Word Count ${item.wordcount}</div>`;
    div.innerHTML += item.snippet;
    div.classList.add("box");
    output.append(div);
    inputField.value = "";
  });
}
