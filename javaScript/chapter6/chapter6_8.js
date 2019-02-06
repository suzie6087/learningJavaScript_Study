/*
    6.7 화살표 표기법

    ES6에서는 화살표 표기법 (함수)가 있다.

     화살표 함수에서는 세가지 단축 문법이 있다.
     - function을 생략해도 됩니다.
     - 함수에 매개변수가 단 하나뿐이라면 괄호()생략가능
     - 함수 바디가 표현식 하나라면 중괄호와 return문도 생략할 수 있다.

     화살표 함수는 항상 익명이다.
*/

const f1 = function () {
  return "hello!";
}

// 또는

const f1 = () => "hello!";

const f2 = function(name) {return `Hello,${name}!`}
// 또는
const f2 = name => `Hello,${name}!`;

const f3 = function(a,b) {return a+b};
// 또는
const f3 = (a,b) => a+b;
