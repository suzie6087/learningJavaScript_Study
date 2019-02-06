/*
    6.2 호출과  참조

    자바스크립트에서는 함수도 '객체'이다. 따라서 값 넘기기, 할당이 가능하다.

    중요한것은 함수 호출과 참조의 차이를 이해하는 것이다.

    함수 식별자 뒤에 괄호를 쓰면 자바스크립트는 함수를 호출하려 한다고 이해하고, 함수 바디를 실행한다.

    괄호를 쓰지 않으면 다른 값과 마친가지로 함수를 참조하는 것이며, 그 함수는 실행하지 않는다.


*/
function getGreeting(){
  return "Hello world";
}

console.log(getGreeting());  //Hello world
console.log(getGreeting);  //[Function: getGreeting]

// 함수의 참조 예

const f = getGreeting;
console.log(f()); //Hello world


// 함수의 객체 프로퍼티에 할당 예
const o = {};  // 객체 o 생성
o.f = getGreeting; // 객체에 f라는 프로퍼티에 함수 getGreeting을 할당한다.
console.log(o.f()); // Hello world

// 배열 요소로 할당도 가능

const arr = [1,2,3];  // 배열 arr 선언
arr[1] = getGreeting; // 1번 인덱스에 함수값 할당
console.log(arr[1]());  //Hello world
