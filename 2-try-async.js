// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = "https://jsonplaceholder.typicode.com/users";

export async function getData() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error("Not valid response");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: `, error.message);
  }
}
