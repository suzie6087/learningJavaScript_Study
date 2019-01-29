/*
  4.2 자바스크립트의 제어문

  4.2.1 제어문의 예외
  제어문의 일반적인 실행 방식을 바꾸는 네가지 문이 있다.

  - break : 루프 중간에 빠져 나간다.
  - continue :  루프에서 다음 단계로 바로 건너 뜁니다.
  - return :  제어문을 무시하고 현재 함수를 즉시 빠져나간다.
  - throw :  예외 핸들러에서 반드시 처리해야 할 예외를 일으킨다. 제어문 바깥에 있어도 상관없다.

  4.2.2 if...else 문을 체인으로 연결하기


*/

// if...else 체인문
if (new Date().getDay() === 3) {
  totalBet = 1;
}else if (funds === 7) {
  totalBet = funds;
}else{
  console.log("No superstition here!");
}
