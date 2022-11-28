import React from "react";

export const Shadow = () => {
  var x = 7; // functional scope
  {
    var x = 5;
    console.log(x);
  }

  console.log(x);

  var a = 6;
  {
    // okay
    let a = 6; // it has a block scope
    console.log(a);
  }

  console.log(a);

  // let c = 6;
  // {
  //   // illegal
  //   var c = 6;
  //   console.log(c);
  // }

  // console.log(c);

  const m = 6;
  {
    const m = 5; // block scope
    console.log(m);
  }
  console.log(m);

  return <div>Shadow</div>;
};
