/*
    7.2 정적 스코프와 동적 스코프

    자바스크립트의 스코프는 정적이다.

    정적 스코프 : 어떤 변수가 함수 스코프 안에 있는지 함수를 정의 할 때 알수있다는 뜻
                  전역 스코프(global scope): 상수는 전역 스코프가능 , 블록 스코프(block scope), 함수 스코프(function scope)에 적용
*/

function f1(){
  console.log('one');
}

function f2(){
  console.log('two');
}

f2(); // two
f1(); // one
f2(); // two


const x  = 3;
function f(){
  console.log(x);
  // console.log(y);
}

{// 새 스코프
  const y = 5;
  f();
}
// y는 다른 스코프안에 존재해서 함수f가 접을을 못한다. x는 같은 스코프안에 있어서 호줄이 가능하다.
