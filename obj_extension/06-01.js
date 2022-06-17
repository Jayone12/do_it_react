const x = 0;
const y = 0;
const obj = { x: x, y: y };
const randomKeyString = 'other';
let combined = {};
combined['one' + randomKeyString] = 'some value';

const obj2 = {
  x: x,
  methodA: () => {
    console.log('method A');
  },
  methodB: () => 0,
};

console.log(combined); // { oneother: 'some value' }
console.log(obj2); // { x: 0, methodA: [Function: methodA], methodB: [Function: methodB] }
