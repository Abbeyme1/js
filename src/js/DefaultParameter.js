import React from "react";

export const DefaultParameter = () => {
  let multiply = (a = 1, b = 1) => console.log(`(${a} x ${b})`, a * b);

  function a(v = () => 1) {
    console.log(v);
  }

  a();

  multiply(5, 6, 7);
  multiply(5, 6);
  multiply(5);
  multiply(5, undefined);
  multiply();
  multiply("", "");
  multiply(null, null);

  //

  function greetings(name, greeting, message = `${greeting} ${name}`) {
    console.log(message);
  }

  greetings("abhay", "hello");
  greetings("abcd", "hello", "buenos dias");

  function withThis(e = this) {
    console.log(e);
  }

  withThis({ a: 5 });
  withThis(5);

  console.log("with array");
  function withArr([a = 0, b = 0] = []) {
    console.log(a + b);
  }

  withArr([5, 6]);
  withArr([5]);
  withArr([11, 6, 8, 5, 89, 4]);
  withArr();

  console.log("with object");

  function withObject({ val = 0 } = {}) {
    console.log(val);
  }

  withObject({ val: 8 });
  withObject({ val: 8, a: 7 });
  withObject({ a: 7 });
  withObject({});
  withObject();

  return <div>DefaultParameter</div>;
};
