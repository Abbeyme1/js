import React from "react";

const Reduce = () => {
  const arr = [1, 2, 3, 4, 5];

  let sum = arr.reduce((acc, e) => acc + e, 0);

  console.log("sum1 ", sum);

  Array.prototype.reducee = function (callback, initialValue = 0) {
    for (let e of this) {
      initialValue = callback(initialValue, e);
    }

    return initialValue;
  };

  let sum2 = arr.reducee((acc, e) => acc + e, 0);
  console.log("sum2 ", sum2);

  return <div>Reduce</div>;
};

export default Reduce;
