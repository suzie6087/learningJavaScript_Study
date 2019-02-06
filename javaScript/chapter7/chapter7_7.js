/*
   7.7 즉시 호출하는 함수 표현식

      함수 표현식에서 사용하면 즉시 호출하는 함수 표현식(IIFE)이란 것을 만들 수 있다.

      즉시 실행 함수의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로
      그 스코프 밖으로 무언가를 내보낼 수 있다는 거다.

      ES6에서 블록 스코프변수를 도입하면서 IIFE가 필요한 경우가 줄어들었지만, 매우 많이 쓰인다.
      클로저를 만들고 클로저에서 무언가 반활할 때에는 유용하게 쓰인다. 
*/


// 즉시 실행 함수
(function(){
    //INFE바디
})();

const message = (function(){
    const secret  = "I'm a secret!";
    return `The secret is ${secret.length} characters long`;
})();
console.log(message);
// 변수 secret은 즉시 실행 함수의 스코프 안에서 안전하게 보호되며 외부에서 접근 할 수 없다.
// 즉시 실행 함수도 함수이므로 무엇이든지 반환 할수 있다. 함수가 몇번 호출됐는지 저장한 겂을
// 외부에서는 절대 손댈 수 없다.

const f = (function(){
  let count = 0;
  return function(){
    return `I have been called ${++count} time(s)`;
  }
})();
f(); // "I have been called 1 time"
f(); // "I have been called 2 time"
