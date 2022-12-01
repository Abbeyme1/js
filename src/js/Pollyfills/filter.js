import React from "react";

const Filter = () => {
  let arr = [1, 2, 3, 4, 5];

  let even = arr.filter((e) => e % 2 == 0);

  console.log(even);

  Array.prototype.filterr = function (callback) {
    // cb = (e) => e * 2
    let arr = [];
    for (let e of this) if (callback(e)) arr.push(e);

    return arr;
  };

  const odd = arr.filterr((e) => e % 2);
  console.log(odd);

  return <div>Filter</div>;
};

export default Filter;
