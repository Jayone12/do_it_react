const list = [0, 1];
let item1 = list[0];
let item2 = list[1];
let item3 = list[2] || -1;
const temp = item2;
item2 = item1;
item1 = temp;

const obj = {
  key1: 'one',
  key2: 'two',
};

const key1 = obj.key1;
const key2 = obj.key2;
const key3 = obj.key3 || 'defalut key3 value';
const newKey1 = obj.key1;
