import React from "react";

export const DestructuringAssignment = () => {
  // FOR ARRAY
  const arr = [1, 2, 3, 4];

  const [x, y] = arr;

  console.log(x, y);

  // FOR OBJECT

  const obj = { fn: "abc", ln: "mno" };

  const { fn, ln } = obj;
  console.log(fn, ln);
  //   const { fn: a, ln: b } = obj;
  //   console.log(a, b);

  // 2 KINDS OF DESTR. PATTERNS  - BINDING    - ASSIGNMENT

  const binding = { a: "A", b: { c: "C" } };
  const {
    a,
    b: { c: d },
  } = binding;

  console.log(a, d);

  const assignment = { a: "A", b: "B" };
  const numbers = [];

  ({ a: numbers[0], b: numbers[1] } = assignment);

  console.log(numbers[0], numbers[1]);

  let a1 = [1, 2, 3, 4];
  let a2 = [5, 6, 7, 8];

  let res = [...a1, ...a2];
  // console.log(res);

  let m = { name: "asdf", age: 5 };
  let n = {
    class: "asdf",
    sdf: {
      age: 55,
      sf: {
        age: 88,
      },
    },
  };

  let r = { ...m, ...n };
  console.log(r);

  return <div>DestructuringAssignment</div>;
};
