/*
    7.3 전역 스코프

     전역 스코프 : 프로그램이 기작할때 암시적으로 주어지는 스코프.
                  전역 스코프에서 선언한 것으 무엇이든 프로그램의 모든 스코프에서 볼 수 있다.

     전역 변수  : 전역 스코프안에서 선언된 변수. 많이 쓰면 안좋다. 남용하지 말자.
*/
//
// let name : "Irena"; //전역
// let age :25;       //전역

// function greet(){
//   console.log(`Hello, ${name}`);
// }
//
// function getBirthYear(){
//   retrun new Date().getFullYear() - age;
// }

// getBirthYear 전역 변수에 의존성이 높다.
// 그래서 사용자 정보를 단일 객체에 보관하는 방법을 사용하게 좋다.

// let user = {
//   name = "Irena",
//   age = 25,
// }
// function greet(){
//   console.log(`Hello, ${user.name}`);
// }
//
// function getBirthYear(){
//   retrun new Date().getFullYear() - user.age;
// }

// greet와 getBirthYear는 여전히 전역 user에 의존 한다. 한번더 수정 하면?!

let user = {
  name = "lra",
  age = 25,
}
function greet(user){
  console.log(`Hello, ${user.name}`);
}

function getBirthYear(user){
  retrun new Date().getFullYear() - user.age;
}
