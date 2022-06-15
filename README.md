# 리액트 ES6 문법
리액트에 필요한 ES6 문법 공부

## 템플릿 문자열
기존에 사용하던 크고 작은 따옴표('', "") 대신 백틱(\`\`)을 사용한다.
```javascript
const string1 = "안녕하세요."
const string2 = "반값습니다."

console.log(`${string1} ${string2}`) // 안녕하세요. 반갑습니다.

const product = {
  name: "도서",
  price: "4200원"
}

console.log(`${product.name}의 가격은 ${product.price}입니다.`) // 도서의 가격은 4200원 입니다.

const boolValue = false;
console.log(`${boolValue ? '참' : '거짓'}`); // 거짓

```

## 전개 연산자
나열형 자료를 추출하거나 연결할 때 사용한다.

### 배열 전개 연산자
```javascript
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
```

### 객체 전개 연산자
```javascript
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
```
