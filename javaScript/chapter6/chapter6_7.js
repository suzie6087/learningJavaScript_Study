/*
    6.6 함수 표현식와 익명 함수

    익명함수란 함수에 식별자가 주어지지 않는 함수를 말한다.

    익명함수 예

    const f = function() {
      // ...
    }

    익명함수는 어디든지 쓸수 있다. 다른 함수나 메서드로 넘길수도 있고, 객체의 함수 프로퍼티가 될수있다.
*/

const g = function f(stop) {
  if(stop) console.log('f sttopped');
  f(true);
};
console.log(g(false));
