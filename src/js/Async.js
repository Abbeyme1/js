import React from "react";

const Async = () => {
  async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    res = await res.json();
    console.log(res);
  }

  getUsers();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => console.log(res));

  return <div>Async</div>;
};

export default Async;
