/*
  6.3 함수와 매개 변수

  함수를 호출하면서 정보를 전달 할때는 함수 매개변수를 이용한다.

*/

function avg(a, b){

  return (a+b)/2;
} //avg

console.log(avg(5,10)); // 매개변수 넣어서 함수 호출


const a = 5, b = 10;
console.log(avg(a,b));

//
function f(){
  console.log(`f 내부: x = ${x}`);
  x = 5;
  console.log(`f 내부: x = ${x} (할당 후)`);
}

let x = 3;
console.log(`f를 호출하기 전 : x = ${x}`);
f(x);
console.log(`f를 호출한 다음 : x = ${x}`);

/*
f를 호출하기 전 : x = 3
f 내부: x = 3
f 내부: x = 5 (할당 후)
undefined
f를 호출한 다음 : x = 5
*/


// 함수 바깥의 변수 x에는 아무 영향도 없다. 이름은 같아도 둘은 다른객체이다.
// 함수 안에서 객체 자체를 변경하면, 그 객체는 함수 바깥에서도 바뀐다.

function f(o){
  o.message = `f 안에서 수정함(이전 값: '${o.message}')`
}

let o = {
  message: "초기 값"
};

console.log(`f를 호출하기 전 : o.message = ${o.message}`);
f(o);
console.log(`f를 호출한 다음 : o.message = ${o.message}`);

// 위 예제를 보면 f안에서 객체 o를 수정했고, 수정한 내용은 함수 바깥에서도 o에 그대로 반영이 되어 있음을 알수가 있다.
// 이것은 원시값과 객체의 핵심적인 차이이다.
// 원시값을 담은 변수는 수정가능하지만, 반면 원시값 자체는 바뀌지 않는다. 반면 객체는 바뀔수 있다.


function f(o) {
  o.message = "f에서 수정함";
  o = {
    message : "새로운 객체!"
  }; //
  console.log(`f 내부 : o.message = ${o.message}(할당 후)`);
}

let o = {
  message : '초기값'
};

console.log(`f를 호출하기 전: o.message = ${o.message}`);
f(o);
console.log(`f를 호출한 다음 : o.message = ${o.message}`);
