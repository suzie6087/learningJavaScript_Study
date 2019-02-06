/*
    7.8 함수 스코프와 호이스팅

    ES6에서 let을 도입하기 전에는 var를 써서 변수를 선연 했다.
    이렇게 선언된 변수들은 함수 스코프라 블리는 스코프를 가졌다.

    let을 변수를 선언하면, 그 변수는 선언하기 전에는 존재 하지 않는다.
    var로 선언한 변수는 현채 스코프안이라면 어디서든 사용 할수 있다. 심지어 선언하기 전에 사용가능
    (선언되지 않은 변수와 값이 undefined인 변수는 다르다)

    호이스팅 :  var로 선언한 변수는 끌어올린다 라는 메커니즘. 자바스크립트는 함수나 전역 스코프 전체를 살펴보고
              var로 선언한 변수를 맨 위로 끌어 올린다. 중요한 점은 선언만 끌어올려진다는것이다. 할당은 끌어 올려지지 않는다.





*/

let var1;
let var2 = undefined;
var1;   // undefined
var2;   // undefined
undefinedVar; // error 정의되지 않았다.

// let을 쓰면, 변수를 선언하기 전 사용하려 할때 에러가 일어난다.

x;        // error
let x = 3; // 여기까지 못감

// var로 변수를 선언하면 선언하기 전에 사용가능
// 호이스팅
x;  // undefined
var x = 3;
x; // 3

// 위에 예제를 해석
var x; // 선언이 끌어 올려진다.
x;      // undefined
x = 3;
x;     // 3


// 예

// 원래 코드

if (x != 3) {
    console.log(y);
    var y = 5;
    if (y === 5) {
      var x = 3;
    }
    console.log(y);
}
if (x === 3) {
  console.log(y);
}

// 자바스크립트가 해석한 코드
var x;
var y;  // 전역스코프로 확인후 var에대한 변수를 호이스팅 한다. 위로 끌어올린다.
if (x != 3) {
    console.log(y);
    y = 5;
    if (y === 5) {
    x = 3;
    }
    console.log(y);
}
if (x === 3) {
  console.log(y);
}


// 호이스팅 예제 - 3  : 전역 스코프 안에서는 var로 새 변수를 만들수 없다, let으로 가능 했던 변수 숨김도 불가능하다.

// 원래 코드
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

// 자바스크립트가 해석한 코드

var x;
x = 3;
if(x === 3){
  x = 2 ;
  console.log(x);
}
console.log(x);
