/*
  4.2.6 for ... in 루프

  for...in 루프는 객체의 프로퍼티에 루프를 실행하도록 설계된 루프

  for (variable in object) {
    statement
  } // for ... in 문법


*/

const player = { name:'Thomas', rank:'Midchipman', age:25 };
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) {
    continue;
    console.log(prop + ':' + player[prop]);
  }
}
