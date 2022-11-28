import React from "react";

export const Promises = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = true;

      if (res) resolve("Success");
      else reject(new Error("Failed!"));
    }, 2000);
  });

  //   promise
  //     .then((res) => {
  //       // success
  //       console.log("yes: " + res);
  //     })
  //     .catch((e) => {
  //       // failed
  //       console.error(e);
  //     });

  //   console.log(promise);

  let np = Promise.resolve("data fetched. ");

  //   np.then((res) => console.log(res));
  //   console.log(np);

  //   np = Promise.reject("failed to get data ");

  //   np.catch((res) => console.log(res));
  //   console.log(np);

  //! PROMISE CHAINING

  let task = () => {
    let done = true;
    return new Promise((res, rej) => {
      if (done) res("TASK");
      else rej(new Error("not done"));
    });
  };

  //   task()
  //     .then((res) => {
  //       console.log(res);
  //       return Promise.resolve("done subtask");
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       throw new Error("error!");
  //     })
  //     .catch((e) => console.log(e));

  // PROMISE COMBINATORS

  //      promise.all

  //   var a = Promise.resolve("A");
  //   var b = Promise.reject("B");
  //   var c = Promise.resolve("C");

  //   Promise.all([a, b, c])
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log("Failed: ", e));

  //      promise.race : get promise that get rejected or resolved first

  //   var a = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const res = true;
  //       if (res) resolve("Success: A");
  //       else reject(new Error("Failed: A"));
  //     }, 2000);
  //   });

  //   var b = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const res = false;
  //       if (res) resolve("Success: B");
  //       else reject(new Error("Failed: B"));
  //     }, 1000);
  //   });

  //   var c = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const res = false;
  //       if (res) resolve("Success: C");
  //       else reject(new Error("Failed: C"));
  //     }, 500);
  //   });

  //   Promise.race([a, b, c])
  //     .then((res) => console.log(res))
  //     .catch((e) => console.error(e));

  //      Promise.allSettled :  result of all either failed or passed

  //   Promise.allSettled([a, b, c])
  //     .then((res) => console.log(res))
  //     .catch((e) => console.error(e));

  //     Promise.any() : first resolved one
  //   Promise.any([b, c])
  //     .then((res) => console.log(res))
  //     .catch((e) => console.error(e));

  //  ASYNC AWAIT

  var a = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = true;
        if (res) resolve("Success: A");
        else reject(new Error("Failed: A"));
      }, 2000);
    });

  var b = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = true;
        if (res) resolve("Success: B");
        else reject(new Error("Failed: B"));
      }, 1000);
    });

  var c = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = false;
        if (res) resolve("Success: C");
        else reject(new Error("Failed: C"));
      }, 500);
    });

  const result = async () => {
    try {
      const resA = await a();
      console.log(resA);
      const resB = await b();
      console.log(resB);
      const resC = await c();
      console.log(resC);

      console.log({ resA, resB, resC });
    } catch (e) {
      console.log(e);
    }
  };

  //   result();

  // PROMISE POLYFILL IMPLEMENTATION

  return <div>Promises</div>;
};
