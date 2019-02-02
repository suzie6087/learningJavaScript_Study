/*
  5.5 숫자 비교

  숫자형을 비교하려고 할때는 염두 해야될것이 있다.

  먼저, 특별한 숫자형 NaN은 그 자신을 포함하여 무엇과도 같이 않다.
  즉, NaN === NaN과 NaN == NaN 은 false이다.

  자바스크립트의 숫자는 더블이다. 그래서 근사치를 나타낸다.
  자바스크립트에서 정수를 비교할때, 그 정수가 안전한 범위라면 안심하고, 일치 열산자를 사용하면된다.
  만약 소수점을 이용한 숫자비교라면 득별한 숫자형 상수 Number.EPSILON 이 있다.
*/

// let n = 0;
// while (true) {
//   n += 0.1;
//   if(n === 0.3)break;
// }
// console.log(`Stopped at ${n}`);  // 영원히 실행..


// Number.EPSILON 통해서 느슨하게 비교하면 성공적으로 루프를 빠져나갈수 있다.
let g = 0;
while (true) {
  g += 0.1;
  if(Math.abs(g - 0.3)<Number.EPSILON)break;
}
console.log(`Stopped at ${g}`);  // 영원히 실행..
