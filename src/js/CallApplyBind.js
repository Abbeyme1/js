import React from "react";

export const CallApplyBind = () => {
  function print(age) {
    console.log(this.firstName + " " + this.lastName + " " + age);
  }

  let user1 = {
    firstName: "Abc",
    lastName: "def",
  };

  let user2 = {
    firstName: "Mno",
    lastName: "pqr",
  };

  print.call(user1, 20, "SFsf");
  print.call(user2, 30);

  // apply: array of args instead of single single args

  print.apply(user1, [30, 40]);

  // bind: returns a func. where func. is binded to obj and can be called later

  //               pass args
  var func = print.bind(user1, 45);
  console.log(func);

  func();

  //   var func = print.bind(user1);
  //   console.log(func);
  //   //        pass args in returned func
  //   func(45);

  return <div>callApplyBind</div>;
};
