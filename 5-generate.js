// Create Webpage content from fetch results

const jsonstr = "https://jsonplaceholder.typicode.com/todos?_limit=10";
const imgstr = "https://picsum.photos/id/237/300/200";
// const textstr = "http://127.0.0.1:3000/";
const textstr = "https://jsonplaceholder.typicode.com/comments/1";

export function getData() {
  const img = document.querySelector("#pic");
  let header = document.querySelector("header");

  fetch(jsonstr)
    .then((response) => {
      if (!response.ok) throw new Error("Invalid response");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));

  fetch(textstr)
    .then((response) => {
      if (!response.ok) throw new Error("Invalid response");
      console.log(response.status);
      return response.text();
    })
    .then((txt) => {
      header.innerHTML += `<h2>${txt}</h2>`;
    })
    .catch((error) => console.warn(error.message));

  fetch(imgstr)
    .then((response) => {
      if (!response.ok) throw new Error("Invalid Response");
      return response.blob();
    })
    .then((blob) => {
      console.log(blob);
      const url = URL.createObjectURL(blob);
      img.src = url;
    })
    .catch((error) => console.warn(error.message));
}
