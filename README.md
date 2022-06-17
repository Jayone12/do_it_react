# 리액트 ES6 문법
리액트에 필요한 ES6 문법 공부

<br>

## 템플릿 문자열
기존에 사용하던 크고 작은 따옴표('', "") 대신 백틱(\`\`)을 사용한다.  
[링크](https://github.com/Jayone12/do_it_react/blob/%232/spread_operator/02-01.js)

<br>

## 전개 연산자
나열형 자료를 추출하거나 연결할 때 사용한다.  
사용 방법은 배열이나 객체, 변수명 앞에 마침표 세 개(...)를 입력한다.  
배열, 객체, 함수 인자 표현식([]. {}. ())안에서만 사용해야한다.

<br>

### 배열 전개 연산자
[링크](https://github.com/Jayone12/do_it_react/blob/%232/spread_operator/02-02.js)

<br>

### 객체 전개 연산자
[링크](https://github.com/Jayone12/do_it_react/blob/%232/spread_operator/02-03.js)

<br>

## 가변 변수와 불변 변수
ES6에서는 가변 변수인 `let`과 불변 변수인 `const`를 사용한다.

<br>

### 가변 변수 사용법
가변 변수는 `let`으로 선언한 변수는 읽거나 수정할 수 있다.  
[링크](https://github.com/Jayone12/do_it_react/blob/%232/variable/03-01.js)

<br>

### 불변 함수 사용법
불변 변수는 `const` 키워드로 선언하며 읽기만 가능하다.  
값이 재할당할 수 없는 것이지 값을 변경할 수는 있다.  
[링크](https://github.com/Jayone12/do_it_react/blob/%232/variable/03-02.js)

<br>

배열이나 객체를 불변 변수로 선언한 후 자바스크립트의 내장함수를 사용하여 값을 변경 할 수 있다.  
[링크](https://github.com/Jayone12/do_it_react/blob/%232/variable/03-03.js)


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

<br>

## 클래스

class 키워드로 User를 정의하고 constructor 함수를 추가하였다.  
생성자, 클래스 변수, 클래스 함수 정의에는 변수 선언 키워드를 사용하지 않는다.  
상속의 경우 extends를 사용하여 User 클래스를 상속하고 부모의 함수를 참조할 경우 super()를 사용한다.

<br>

### ES6 class 문법 사용 방법
[링크](https://github.com/Jayone12/do_it_react/blob/%232/class/04-02.js)

<br>

## 화살표 함수
Arrow funtion이라고도 부른다.  
- 함수 표현식을 간결하게 할 수 있다.
- 커링(currying)과 같은 디자인패턴에서 사용되는 함수를 반환할때 `'계단형 함수 선언'`과 같은 구조가 만들어지지 않게 해준다.  

[링크](https://github.com/Jayone12/do_it_react/tree/%232/arrow_function)

<br>

화살표 함수는 콜백 함수의 this 범위로 오류가 생기니 주의해야한다. 이는 bind() 함수를 사용하여 해결 가능
