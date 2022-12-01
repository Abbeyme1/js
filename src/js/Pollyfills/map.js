import React from "react";

const Map = () => {
  const nums = [1, 2, 3, 4];

  const double = nums.map((e, i, arr) => e * 2);

  console.log(double);

  Array.prototype.mapp = function (callback) {
    // cb = (e) => e * 2
    let arr = [];
    for (let e of this) arr.push(callback(e));

    return arr;
  };

  const triple = nums.mapp((e) => e * 3);
  console.log(triple);

  return <div>map</div>;
};

export default Map;
