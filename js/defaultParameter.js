function defaults(a, b = 5, c = b, e = this, f = arguments, g = this.value) {
  //   console.log(`
  //     a: ${a},
  //     b: ${b},
  //     c: ${c},
  //     e: ${e},
  //     f: ${f},
  //     `);

  return { a: a, b: b, c: c, e: e, f: f, g: g };
}

// console.log(defaults(5, 6, 8, "abcd", { value: 5 }));
console.log(defaults.call({ value: 7, name: "ancd" }));
