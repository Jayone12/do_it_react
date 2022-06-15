const num = 1;
num = 3; // 자료형 오류 발생

const str = '문자';
str = '새 문자'; // 자료형 오류 발생

const arr = [];
arr = [1, 2, 3]; // 자료형 오류 발생

const obj = {};
obj = { name: '내 이름' }; // 자료형 오류 발생

// 내장 함수로 객체 및 배열 값 변경하기
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0, 1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내 이름'; // obj2 = {name: '내 이름'}
Object.assign(obj2, { name: '새 이름' }); // obj2 = {name: '새 이름'}
delete obj2.name; // obj2 = {}
