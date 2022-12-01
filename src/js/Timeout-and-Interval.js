import React, { useState } from "react";

function TimeoutAndInterval() {
  // SETTIMEOUT
  //   setTimeout(() => console.log("a"));
  //   setTimeout(() => console.log("b"), 0);
  //   setTimeout(() => console.log("c-str"), "1 second"); // timeout = 0ms
  //   setTimeout(() => console.log("c-1"), 1);
  //   setTimeout(() => console.log("c-str-1000"), "1000"); // timeout = 1s

  function run(i) {
    console.log("run: ", i);
  }

  //   setTimeout(run);
  //   setTimeout(run, 0, 1);
  //   console.log("0");

  let id;

  function start() {
    id = setTimeout(() => {
      console.log("message");
    }, 3000);
  }

  function end() {
    clearTimeout(id);
    console.log("cancelled");
  }

  let intervalId;
  function print(msg) {
    console.log(msg);
  }

  function clearInt() {
    clearInterval(intervalId);
    document.querySelector(".text").style.color = "black";
  }

  function startInt() {
    // intervalId = setInterval(print, 1000, "hey");
    var c = false;
    intervalId = setInterval(() => {
      console.log(this);
      let text = document.querySelector(".text");
      text.style.color = c ? "red" : "blue";
      c = !c;
    }, 500);
  }

  return (
    <div>
      <button onClick={start}>Get Message after 3s</button>
      <button onClick={end}>Cancel Message</button>
      <h2 className="text"> HELLO WORLD </h2>
      <button onClick={startInt}>Start Interval</button>
      <button onClick={clearInt}>Clear Interval</button>
    </div>
  );
}

export default TimeoutAndInterval;
