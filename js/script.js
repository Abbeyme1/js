class User {
  constructor(name) {
    this.name = name;
  }

  arrow() {
    setTimeout(() => {
      console.log("Arrow ", this);
    }, 0);
  }

  func() {
    function a() {
      console.log("func ", this);
    }

    a();
  }
}

var name = "outer name";

let user = new User("user 1");

user.arrow();
user.func();
// console.log(this.name);

var age = 30;

var person = {
  age: 22,
  getAge: getAge,
  getAge2: getAge2,
};

function getAge() {
  console.log(this.age);
}

var getAge2 = () => {
  console.log(this.age);
};

// person.getAge();
// person.getAge2();
