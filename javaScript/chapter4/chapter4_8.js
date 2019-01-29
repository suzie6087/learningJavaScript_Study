/*
  4.2.7 for...of 루프

  ES6에서 새로생긴 반복문이다. 걸렉션의 요소에 루프를 실행하는 다른 방법

  각 요소의 인덱스를 알 필요가 없을 때 알맞다.

  인덱스를 알아야 한다면 for루프를 사용

  for (variable of object) {
    statement
  }

*/

const hand =  [randFace(), randFace(), randFace()];
for (let face of hand) {
     console.log(`You rolled ...${face}!`);
}


const hand =  [randFace(), randFace(), randFace()];
for (let i=0, i<hand.length; i++) {
     console.log(`Roll ${i+1}:${hand[i]}`);
}
