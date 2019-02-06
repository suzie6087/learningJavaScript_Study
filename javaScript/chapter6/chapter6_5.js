/*
  6.4 객체의 프로퍼티인 함수

  객체의 프로퍼티인 함수를 메서드라고 불러서 일반적인 함수과 구별한다.

*/

const o = {
  name: 'Wallace', // 원시값 프로퍼티
  bark: function(){ return 'Woof!'}; // 함수 프로퍼티(메서드)
}

// ES6에서 간편하게 메서드를 추가할 수 있는 문법이 새로 생김

const o = {
  name : 'Wallace',
  bark(){ return 'Woof!';}
}
