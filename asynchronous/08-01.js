// 콜백 예제
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료!'), 100);
}

function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 200);
}

function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}

function urgentWork() {
  console.log('긴급 작업');
}

work1((msg1) => {
  console.log('done after 100ms' + msg1);
  work2((msg2) => {
    console.log('done after 300ms' + msg2);
    work3((msg3) => console.log('done after 600ms' + msg3));
  });
});

urgentWork();

// 긴급 작업
// done after 100ms작업1 완료!
// done after 300ms작업2 완료!
// done after 600ms작업3 완료!
