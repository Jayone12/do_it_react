// 기존 방식

function sum(a, b){
  return a + b
}

const multiply = function(a, b){
  return a * b
}


// ES6 화살표 함수 방식
const sum = (a, b) => {
  return a + b
};

// 함수의 로직이 1가지의 결과갑을 반환할 경우
const sum = (a, b) => a + b

// 반환값이 객체일 때
const sumAndMultiply = (a, b) => ({
  add: a + b,
  miltiply: a * b
})
