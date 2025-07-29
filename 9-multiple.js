//handle multiple requests for data
// in sequence .then().then().then()
// or at the same time - Promise.all() .race() .allSettled()

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';

export function getData() {
  //
  let imgResponse;
  let jsonResponse;
  //sequence
  fetch(imgstr)
    
}
