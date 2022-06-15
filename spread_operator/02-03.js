const obj1 = {
  one: 1,
  two: 2,
  other: 0,
};

const obj2 = {
  three: 3,
  four: 4,
  other: -1,
};

const combined1 = {
  ...obj1,
  ...obj2,
};

console.log(combined1); // { one: 1, two: 2, other: -1, three: 3, four: 4 }

const combined2 = {
  ...obj2,
  ...obj1,
};

console.log(combined2); // { three: 3, four: 4, other: 0, one: 1, two: 2 }

const { other, ...others } = combined1;

console.log(other); // -1
console.log(others); // { one: 1, two: 2, three: 3, four: 4 }
