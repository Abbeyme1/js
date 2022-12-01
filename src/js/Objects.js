import React from "react";

const Obj = () => {
  const user = {
    name: "abc",
    age: 52,
    "last name": "mno pqr",
  };

  user.name = "sam"; // we can chnage val even if obj is const

  // other way to access key
  console.log(user["name"]);
  console.log(user["last name"]);

  // delete property
  //   delete user.age;
  delete user["age"];

  // add dynamic values
  //   user["first name"] = "abcd";

  //      or

  let property = "first name";
  let value = "abcd";
  user[property] = value;

  console.log(user);

  // TRAVERSAL

  /// keys
  Object.keys(user).forEach((key) => console.log(key));

  // value
  Object.values(user).forEach((val) => console.log(val));

  // entires [key,value]
  Object.entries(user).forEach((e) => console.log(e));

  /// multiply num values by 2
  let nums = {
    a: 1,
    b: 3,
    c: "abcd",
  };

  function multiply(obj, v) {
    Object.entries(obj).forEach((e) => {
      if (typeof e[1] === "number") {
        obj[e[0]] = e[1] * 2;
      }
    });
  }

  multiply(nums, 2);

  console.log(nums);

  // stringify

  let strObj = JSON.stringify(nums);
  console.log(strObj);

  // stringfy with specific keys
  strObj = JSON.stringify(nums, ["a", "c"]);
  console.log(strObj);

  // clone obj

  let objClone = Object.assign({ k: "asdf" }, nums);

  console.log(objClone);
  nums.a = 5;
  console.log(objClone);

  let objNew = {
    a: {
      b: {
        c: 5,
      },
    },
  };

  //   objClone = Object.assign({}, objNew);
  //   console.log("assign 1 ", objClone);
  //   objNew.a.b.c = 30;
  //   console.log(objClone);

  //   /// 2) usong JSON.stringify and json.parse
  //   objClone = JSON.parse(JSON.stringify(objNew));
  //   console.log(objClone);
  //   objNew.a.b.c = 20;
  //   console.log(objClone);

  //   /// 3) {...obj}
  //   objClone = { ...objNew };
  //   console.log(objClone);
  //   objNew.a.b.c = 20;
  //   console.log(objClone);

  return <div>Objects</div>;
};

export default Obj;
