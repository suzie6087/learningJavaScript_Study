/*
    6.3.1 매개변수가 함수를 결정하는가?

    함수의 시그니처에는 매개변수가 포함되어있다.
    자바스크립트에서는 함수 f가 있다면 호출 할 때 매개변수를 한개 전달하든 열개 전달하든 같은 함수를 호출한다.

    다시말해 ,  어떤 함수를 호출하든 그 함수에서 정해진 매개변수 숫자와 관계없이 몇개의 매개변수를 전달해도 된다.

    6.3.2 매개변수 해체

    매개 변수를 해체할 수 있다.

    6.3.3 매개 변수 기본값

    ES6에서는 매개변수에 기본값을 지정하는 기능도 추가 되었다.
    일반적으로 매개변수에 값을 제공하지 않으면 undefined가 값으로 할당된다.
    ES6에서는 기본값을 지정할 수 있다.
*/

//6.3.1 예

function f(x){
  return `in f: x = ${x}`;
}

console.log(f());  //in f: x = undefined

// 6.3.2 예

// function getSentence({ subject, verb, object }) {
//   return `${subject} ${verb} ${object}`;
// }
//
// const o = {
//   subject : "I",
//   verb : "love",
//   object : "JavaScript"
// };
// console.log(getSentence(o));


// 배열도 해체 가능
function getSentence([ subject, verb, object ]){
  return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
console.log(getSentence(arr));

// ...확산연산자를 매개변수로 사용가능하다.

function addPrefix(prefix, ...words){
  // 나중에 더 좋은 방법을 배웁니다.
  const prefixWords = [];
  for(let i=0 ; i<words.length ; i++){
    prefixWords[i] = prefix + words[i];
  }
  return prefixWords;
}

addPrefix("con", "verse", "vex");



// 6.3.3 예

function f(a, b = "default", c = 3 ) {
  return `${a}-${b}-${c}`;
}


console.log(f(5,6,7));
console.log(f(5,6));
console.log(f(5));
console.log(f());
