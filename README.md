# 리액트 컴포넌트
리액트의 핵심 중 하나인 컴포넌트에 대해 정리.

## 컴포넌트를 표현하는 JSX
Javscript XML의 줄임말로 자바스크립트에 XML을 추가한 확장형 문법이다.  
JSX 하나로 자바스크립트와 HTML을 동시에 작성 할 수 있다.  

<br>

### JSX 사용하기
```javascript
function App() {
  return (
  // 아래는 JSX 양식
    <div className="App">
    // JSX 양식
      <h1 className="title">두잇! 리액트 시작하기</h1>
    </div>
  );
}

export default App;
```

<br>

## 컴포넌트와 구성 요소
리액트의 꽃이라 불릴 정도로 리액트에서 가장 중요한 요소

<br>

### 컴포넌트의 개념
프레임워크는 MVC방식으로 정보, 화면, 구동 코드를 분리하여 관리했다.  
- 정보: 모델(Modle)
- 화면: 뷰(View)
- 구동: 컨트롤러(controller)
이 방식은 코드 관리를 효율적으로 할 수 있으나 각 요소의 의존성(하나만 바꾸기가 쉽지 않음)이 높아서 재활용이 어렵다.  
컴포넌트는 MVC의 뷰를 독립적으로 구성하여 재사용도 할 수 있고, 컴포넌트를 통하여 새로운 컴포넌트도 쉽게 만들 수 있다.  

<br>

### 간단한 컴포넌트 만들기
1. src 폴더 내 TodaysPlan.jsx를 생성한다.
2. 아래와 같이 입력한다.  
``` javascript
const TodaysPlan = () => {
  return <div>놀러가자.</div>;
};
export default TodaysPlan;
```
3. app.js로 가서 아래와 같이 작성한다.  
```javascript
// 위에서 생성한 TodaysPlan.jsx를 import 한다.
import TodaysPlan from './TodaysPlan';

function App() {
  return (
    <div className="App">
    // import한 컴포넌트를 사용한다.
      <TodaysPlan />
    </div>
  );
}

export default App;
```

<br>

### 컴포넌트 구성 요소 살피기
|데이터 구성 요소|특징|
|--|--|
|프로퍼티|상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터다.|
|state|컴포넌트의 상태를 저장하고 변경할 수 있는 데이터|
|컨텍스트|부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터|

<br>

## 컴포넌트에 데이터를 전달하는 프로퍼티
상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용한다. 이 때 프로퍼티값은 수정할 수 없다는 특징이 있다.

<br>

### 프로퍼티의 기초
1. app.js를 아래와 같이 수정한다.
```javascript
import './App.css';
import TodaysPlan from './TodaysPlan';

function App() {
  return (
    <div className="App">
      <TodaysPlan message="바다로" />
    </div>
  );
}

export default App;
```
2. TodaysPlan.jsx를 아래와 같이 수정한다.
```javascript
const TodaysPlan = (props) => {
  return <div>{props.message} 놀러가자.</div>;
};
export default TodaysPlan;
```

<br>

app.js에서 \<TodaysPlan\>에 프로퍼티로 `message="바다로"`를 전달하였다.  
이를 2번에서 받아와서 나타낼 수 있다. 상위에서 하위 컴포넌트로 전달하는 것을 `단방향 데이터`라고 한다.

<br>

## 컴포넌트 상태 관리

<br>

### state로 상태 관리
state는 '값을 저장하거나 변경할 수 있는 개체'로 보통 버튼을 클릭하거나 값을 입력하는 등의 이벤트와 함께 사용한다.  
[링크](https://github.com/Jayone12/do_it_react/blob/%233/src/StateExample.jsx)  

<br>

1. state 값을 변경할때는 setState() 함수를 사용해야 한다.
  -> state 값을 직접 변경하면 안 되는 이유는 화면을 그려주는 시점은 리액트 엔진이 정하기 때문이다.  
  즉, state 값을 직접 변경하여도 새로 렌더링이 되지 않으며, setState()를 통해 변경해야 재 렌더링을 한다.
2. setState()는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거친다.
3. setState() 함수의 인자로 함수를 전달하면 이전 state 값을 쉽게 읽을 수 있다.
```javascript
setState((prevState) => prevState + 1);
```
