const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined1 = [...arr1, ...arr2];
console.log(combined1); // [ 1, 2, 3, 4, 5, 6 ]

const [first, second, three, four = 'empty', ...other] = arr1;
console.log(first, second, three, four, ...other); // 1 2 3 empty []

(function func() {
  const [first, ...other] = arguments;
  console.log(...other); // 2 3
})(...arr1);
