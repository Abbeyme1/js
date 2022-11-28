import React from "react";

export const HigherOrderFunctions = () => {
  let radius = [9, 5, 11, 23];

  let area = (radius) => {
    return Math.PI * radius * radius;
  };

  let diameter = (radius) => {
    return 2 * radius;
  };

  let calculate = (arr, logic) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) output.push(logic(arr[i]));

    return output;
  };

  //   console.log(calculate(radius, area));
  //   console.log(radius.map(diameter));
  //   console.log(calculate(radius, diameter));

  //

  Array.prototype.calculate = function (logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) output.push(logic(this[i]));

    return output;
  };

  //   console.log(radius.calculate(area));

  //  MAP, FILTER AND REDUCE

  let arr = [1, 2, 3, 4];

  // dobule
  console.log(arr.map((e) => e * 2));

  // even values
  console.log(arr.filter((e) => e % 2 == 0));

  // sum of elements in array
  console.log(arr.reduce((acc, curr) => acc + curr, 0));

  // max
  console.log(arr.reduce((acc, curr) => Math.max(acc, curr), 0));

  // data from db
  const users = [
    { firstName: "abc", lastName: "efg", age: 45 },
    { firstName: "ijk", lastName: "lmn", age: 20 },
    { firstName: "opq", lastName: "rst", age: 20 },
    { firstName: "uvw", lastName: "xyz", age: 45 },
    { firstName: "ksdf", lastName: "xsfyz", age: 30 },
  ];

  console.log(users.map((user) => user.firstName + " " + user.lastName));

  // age: count of people with that age
  console.log(
    users.reduce((map, user) => {
      let c = map[user.age] === undefined ? 1 : map[user.age] + 1;
      map[user.age] = c;
      return map;
    }, {}),
  );

  // find people with age greater than 29

  console.log(
    users.filter((user) => user.age > 29).map((user) => user.firstName),
  );

  // or

  console.log(
    users.reduce((arr, user) => {
      if (user.age > 29) arr.push(user.firstName);
      return arr;
    }, []),
  );

  return <div>HigherOrderFunctions</div>;
};
