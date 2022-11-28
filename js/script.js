let btn = document.getElementById("btn");

function count() {
  let counter = 0;
  btn.addEventListener("click", function abc() {
    console.log("clicked: ", ++counter);
  });
}

count();
