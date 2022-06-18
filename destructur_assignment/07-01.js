const list = [0, 1];
let [item1, item2, item3 = -1] = list;

[item2, item1] = [item1, item2];

const obj = {
  key1: 'one',
  key2: 'two',
};

const { key1: newKey1, key2, key3 = 'default key3 value' } = obj;

// 구조 할당은 전개 연산자를 함께 사용한다. 
// 구조 분해와 구조 할당은 함수 인잣값을 다루거나 JSON 데이터를 변환할 때 유용하다.
const [item1, ...otherItems] = [0, 1, 2];
const { key1, ...others } = { key: 'one', key: 'two' };

console.log(otherItems); // [ 1, 2 ]
console.log(others); // { key: 'two' }
