import React from "react";

export const ForEach = () => {
  let arr = [1, 2, 3, 4, 5];

  //   arr.forEach((e) => console.log(e));

  Array.prototype.forEachh = function (callback) {
    for (let e of this) callback(e);
  };

  arr.forEachh((e) => console.log(e));

  return <div>forEach</div>;
};
