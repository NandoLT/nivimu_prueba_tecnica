const url:string = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  return fetch(url)
  .then(res => res.json()); 
}




