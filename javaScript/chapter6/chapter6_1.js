/*
    6.함수

    함수는 하나의 단위로 실행되는 문의 집합이다.

    모든 함수에는 '바디'가 있다.
    함수 기본 예 - 함수 선언
    function sayHello(){
        // 함수 바디는 여는 중괄호로 시작하고
        console.log("Hello world");
        console.log("Hello world");
        console.log("Hello world");

        // 닫는 중괄호로 끝난다.
    }

    sayHello(); <- 함수 호출

    6.1 반환값

     함수 호출도 표현식이고, 우리가 이미 알고 있듯 표현식은 값이 된다.
     함수의 호출값은 무엇인가?! 그것은 바로 '반환 값'이다.

     함수 바디 안에 return 키워드를 사용하면 함수를 즉시 종료하고 값을 반환한다.
*/

// 6.1 예
function getGreeting(){
  return "Hello world";
}

console.log(getGreeting());
