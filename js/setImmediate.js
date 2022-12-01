// SET IMMEDIATE ONLY SUPPORTED BY NODE.JS

setImmediate(() => {
  console.log("set immediate");
}, 1000);

setInterval(() => {
  console.log("set interval");
}, 200);

setTimeout(() => {
  console.log("set timeout");
}, 0);
console.log("abc");
