import React from "react";

export const Closures = () => {
  var x = () => {
    var v = 6;

    var f = () => {
      console.log(v);
    };

    v = 100;
    return f;
  };

  var y = x(); // closure was returned

  // 1 2 3
  var f = () => {
    for (let i = 1; i <= 3; i++)
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
  };

  // 4 4 4
  var f = () => {
    for (var i = 1; i <= 3; i++) {
      function closure(i) {
        setTimeout(() => {
          console.log(i);
        }, i * 1000);
      }
      closure(i);
    }
  };

  //   f();

  var c = () => {
    let count = 0;
    return () => {
      console.log(count++);
    };
  };

  var cc = c();
  //   cc();
  //   cc();

  // it will create a new execution context
  var oc = c();
  //   oc();

  // constructor

  function Counter() {
    var c = 0;
    this.inc = () => {
      console.log("inc ", ++c);
    };

    this.dec = () => {
      console.log("dec ", --c);
    };
  }

  var c1 = new Counter();
  c1.inc();
  c1.inc();
  c1.dec();
  c1.dec();
  c1.inc();

  return <div>Closures</div>;
};
