const data = fetch("https://dummyjson.com/products/1").then((res) =>
  res.json(),
);

export default await data;
