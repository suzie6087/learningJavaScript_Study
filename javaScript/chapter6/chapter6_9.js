/*
  6.8 call 과 apply, bind

  자바 스크립트에서는 일반적인 this 방법 이외에도, 함수를 어디서 , 어떻게 호출했는냐에 관계없이 this가 무엇인지 지정할 수 있다.

  call
  call 메서드는 모든 함수에서 사용할수 있다. this를 특정값으로 지정할 수있다.

  apply

  bind
  this의값을 영구적으로 바꿀수있다.
*/

const bruce = { name: "Bruce" };
const madeline = { name: "Madeline"};

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용한다.

function greet(){
  return `Hello, I'm ${this.name}! `;
}

console.log(greet());
console.log(greet.call(bruce));  // this는 bruce
console.log(greet.call(madeline)); // this는 madeline

// call 을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다.
// call의 첫 번째 매개변수는 this로 사용할 값이고, 매개 변수가 있으면 그 매개변수는 호출하는 함수로 전달

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');


// apply는 배열 요소를 함수 매개변수로 사용하야 할 때 유용하다.
// apply를 설명할 때 흔히 사용하는예제는 배열의 최솟값과 최대값을 구하는 거다.
update.apply(bruce, [1955, "actor"]);
update.apply(madeline, [1918, "writer"]);

const arr = [2,3,-5,15,7];
console.log(Math.min.apply(null, arr)); // -5
console.log(Math.max.apply(null, arr)); // 15


// bind

const updateBruce = update.bind(bruce);

unpateBruce(1904, "actor");

updateBruce.call(madeline, 1273, "king");


// bind에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출 하는 새 함수를 만드는 효과가 있다.

const updateBruce1949 = update.bind(bruce, 1949);
console.log(updateBruce1949("singer, songwriter"));
