import React from "react";

const CallBackFunctions = () => {
  setTimeout(() => {
    console.log("callback function");
  }, 2000);

  function fun(param) {
    param();
  }

  fun(() => {
    console.log("call back func.");
  });

  return <div>CallBackFunctions</div>;
};

export default CallBackFunctions;
