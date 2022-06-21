function debounce(func, delay) {
  // settimeout의 정보를 받아온다.
  let inDebounce;
  return function (...args) {
    // setTimeout 실행중이라면 true, 없다면 false
    if (inDebounce) {
      // 최초 실행중인 setTimeout이 없으므로 패스
      // 후에 해당 함수가 실행 될 경우 실행중인 setTimeout이 있으므로 취소한다.
      clearTimeout(inDebounce);
    }
    // setTimeout을 실행하고 해당 정도를 변수에 할당한다.
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 1000);
run('a');
run('b');
run(2);

// run 함수가 실행되고 1초 이전에 똑같은 run 함수가 실행될 경우 이전 함수 실행은 중지하고 마지막 꺼만 실행한다.
// 즉 지정한 딜레이 시간 내에 동일한 함수가 실행 될 경우 이전 내용은 취소되고 마지막꺼만 실행한다
