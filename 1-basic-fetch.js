//the simplest fetch you can use and still have error handling
const url = "https://jsonplaceholder.typicode.com/users";

export function getData() {
  fetch(url)
    .then((response) => {
      console.log(response.status);

      if (!response.ok) throw new Error("was not a valid response");

      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(`Error Ocurred:`, error.message));
}
