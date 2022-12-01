this.n = 5;

function a() {
  console.log(this.n);
}

// a(); // 5

const b = () => {
  console.log(this.n);
};

// b(); // 5

var user = {
  name: "abc",
  age: 20,
  info() {
    console.log(this.name);
  },
  ainfo: () => {
    console.log("a:", this);
  },
  childObj: {
    newName: "mnop",
    info() {
      console.log(this.name, this.newName);
    },
  },
  achildObj: {
    newName: "a:mnop",
    ainfo: () => {
      console.log(this);
    },
  },
};

// user.info(); // abc
// user.childObj.info(); // undefined mnop

// user.ainfo();
// user.achildObj.ainfo();

var user = {
  abc: () => {
    var info = () => {
      console.log(this);
    };

    info();
  },
};

user.abc();

class User {
  constructor(name) {
    this.name = name;
  }

  getName = () => {
    console.log(this.name);
  };
}

var user = new User("abcd");
user.getName();

var user = {
  name: "ABCD",
  info() {
    console.log(this.name);
  },
};

setTimeout(() => {
  user.info();
}, 1000);
