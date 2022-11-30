import React from "react";

export const Currying = () => {
  function multiply(a, b) {
    console.log(a * b);
  }

  // USING BIND
  let multiplyByTwo = multiply.bind(this, 2); // currying the method

  let multiplyByThree = multiply.bind(this, 3);

  // multiplyByTwo(3);
  // multiplyByThree(3);

  // USING CLOSURE

  let power = (base) => {
    return (n) => {
      console.log(Math.pow(base, n));
    };
  };

  let base2 = power(2);

  // base2(5);

  function volume(a, b, c) {
    console.log(a * b * c);
  }

  // volume(2, 3, 4);

  function volume(a) {
    return (b) => {
      return (c) => {
        console.log(a * b * c);
      };
    };
  }

  volume(2)(3)(4);

  return <div>Currying</div>;
};
