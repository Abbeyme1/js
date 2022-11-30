import React from "react";

export const Classes = () => {
  let User = class {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };

  let u = new User("abc", "def");

  User = class User2 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    static count = 5;

    get name() {
      return this.firstName + " " + this.lastName;
    }
  };
  let u2 = new User("anc", "Sdf");

  console.log("count :", User.count, u2.count);

  //   console.log(u2.name);

  // id generator

  function* generateId() {
    let id = 0;
    while (true) {
      yield ++id;
    }
  }

  const idGenerator = generateId();
  console.log(idGenerator.next());

  // iterator

  function* iterator(arr) {
    for (let i = 0; i < arr.length; i++) {
      yield arr[i];
    }
  }

  let arr = [1, 2, 3, 4, 5, 6];

  let itr = iterator(arr);

  console.log(itr.next());
  console.log(itr.next());

  return <div>Classes</div>;
};
