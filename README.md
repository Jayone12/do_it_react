# 리액트 ES6 문법
리액트에 필요한 ES6 문법 공부

<br>

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

<br>

## 전개 연산자
나열형 자료를 추출하거나 연결할 때 사용한다.

<br>

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

<br>

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

<br>

## 가변 변수와 불변 변수
변수 선언에 있어 var 변수가 있으며, ES6에서는 가변 변수인 `let`과 불변 변수인 `const`를 사용한다.

<br>

### 가변 변수 사용법
```javascript
let num = 1;
num = num * 3;

let str = '문자';
str = '다른문자';

let arr = [];
arr = [1, 2, 3];

let obj = {};
obj = {
  name: '새 객체',
};

```

<br>

### 불변 함수 사용법
```javascript
const num = 1;
num = 3; // 자료형 오류 발생

const str = '문자';
str = '새 문자'; // 자료형 오류 발생

const arr = [];
arr = [1, 2, 3]; // 자료형 오류 발생

const obj = {};
obj = {name: '내 이름',}; // 자료형 오류 발생
```

배열이나 객체를 불변 변수로 선언한 후 자바스크립트의 내장함수를 사용하여 값을 변경 할 수 있다.

```javascript
// 내장 함수로 객체 및 배열 값 변경하기
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0, 1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내 이름'; // obj2 = {name: '내 이름'}
Object.assign(obj2, { name: '새 이름' }); // obj2 = {name: '새 이름'}
delete obj2.name; // obj2 = {}
```

불변 변수는 값을 수정할 수 없는데 위와 같이 수정 하는 것을 `'무결성 제약 조건 위배되었다'` 라고 한다.  
해당 내용에서는 불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성을 유지할 것이다.  
만약의 경우로 값이 변경되어야 할 경우가 생긴다면 그땐 새로 불변 변수를 생성하고 새 값을 지정하는 방법을 사용한다.

<br>

|가변 내장 함수|무결성 내장 함수|
|--|--|
|push(...items)|concat(...items)|
|splice(s, c, ...items)|slice(0, s)<br>concat(...items, slice(s+c)|
|pop()|slice(0, len - 1)|
|shift()|slice(1)|

무결성 함수는 객체나 배열을 직접 수정하는 것이 아니라 새 결과를 반환하는(무결성 제약 조건을 지키는)함수를 말한다.  
 
<br>

- 무결성 제약 규칙에 의해 변수가 변하는 시점을 쉽게 파악할 수 있다.
- 수정 전, 후의 변수값을 비교할 수 있어 가변 변수보다 유용하다.

<br>

이 프로젝트에서는 무결성 제약 규칙을 고부할 겸 가급적 불변 변수만 사용해 실습을 진행한다.
