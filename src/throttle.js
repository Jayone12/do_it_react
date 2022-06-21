function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  // 서버 요청
  return function (...args) {
    const context = this;
    // 처음 실행 할때
    if (!lastRan) {
      // 함수를 즉시 실행
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      // 첫 실행 후의 요청을 클리어 한다.
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        // 지연 시간 계산이 지정한 delay보다 크거나 작으면 실행한다.
        if (Date.now() - lastRan >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

const checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition =
    document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    console.log("다음 페이지 로딩");
  }
};

const infiniteScroll = throttle(checkPosition, 1000);
window.addEventListener("scroll", infiniteScroll);
