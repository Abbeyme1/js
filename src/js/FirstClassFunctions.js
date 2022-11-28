import React from "react";

export const FirstClassFunctions = () => {
  // FUNCTIONAL STATEMENT
  function f() {
    console.log("functional statement");
  }

  // FUNCTIONAL EXPRESSION
  var b = function () {
    console.log("functional expression");
  };

  // ANONYMOUS FUNCTIONS
  //   function () {

  //   }

  // NAMED FUNCTION EXPRESSION
  var v = function abc() {
    console.log("named function expression");
  };

  abc();

  // DIFFERENCE BTW PARAMETERS AND ARGUEMENTS

  function abc(param1, param2) {}

  abc(5, 6); // 5 , 6  are arguements

  // FIRST CLASS FUNCIONS

  function runFun(f) {
    f();
    return f;
  }

  var f = runFun(() => {
    console.log("first class func. ");
  });
  f();

  //

  return <div>FirstClassFunctions</div>;
};
