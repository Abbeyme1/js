import React from "react";

export const TemplateLiterals = () => {
  let username = "abcd";

  console.log(`Username is ${username}`);

  // tagged template

  function func(strings, a, b) {
    console.log(strings);
    console.log(a);
    console.log(b);

    let [s1, s2, s3] = strings;

    return `${s1}${a}${s2}${b}${s3}`;
  }

  let name = "ABc";
  let age = 5;

  console.log(func`Name: ${name} and age: ${age}. ..... `);
  console.log(`Name: ${name} and age: ${age}. ..... `);

  console.log`hello`;
  console.log.bind("anyObj", 5)`hey`;
  //   new Function(["abc", "def", "gh"])`hey`;

  new Function("console.log(arguments)")`hey  ${5 + 6} abcd  ${7 + 8}`;

  function rec(strings, ...values) {
    console.log(strings, values);
    return rec;
  }

  rec`hey``hello`;

  //   rec?.`hey`;

  // RAW STRINGS

  function tag(strings) {
    console.log("normal ", strings[0]);
    console.log("raw ", strings.raw[0]);
  }

  tag`hey abc \n mno`;

  const str = String.raw`Hi\n${7 + 8}`;
  console.log(str, str.length);

  return <div>TemplateLiterals</div>;
};
