// useState import
import { useState } from 'react';

const StateExample = () => {
  // useState Hook을 사용하여 상태관리를 한다. (class형 컴포넌트는 다르다.)
  // useState(초기값) 초기값은 state에 할당된다.
  const [state, setState] = useState({ loading: true, formData: 'no data' });

  const handleData = () => {
    const data = 'new data';
    const { formData } = state;
    // setState(변경 값)을 하므로써 state의 값을 변경한다.
    setState({
      loading: false,
      formData: data + formData,
    });
    console.log('loading값', state.loading);
  };
  // 4초 뒤에 함수 실행
  setTimeout(handleData, 4000);
  return (
    <div>
      <span>로딩중: {String(state.loading)}</span>
      <span>결과: {state.formData}</span>
    </div>
  );
};

export default StateExample;
