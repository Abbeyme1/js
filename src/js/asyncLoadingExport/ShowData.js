import React from "react";
import data from "./asyncFuncttion";

export const ShowData = () => {
  console.log(data);
  return (
    <div>
      {data ? (
        <div>
          {Object.entries(data).map((e) => (
            <div key={e[0]}>
              <span>{e[0]} : </span>
              <span>{e[1]}</span>
            </div>
          ))}
        </div>
      ) : (
        <p> loading</p>
      )}
    </div>
  );
};
