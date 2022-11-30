import React from "react";

export const MultiLineString = () => {
  console.log("abc \ndef");
  console.log(`abc
def`);

  return <div>MultiLineString</div>;
};
