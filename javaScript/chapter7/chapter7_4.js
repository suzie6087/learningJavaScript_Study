/*
    7.4 블록 스코프

    블록 스코프  : 그 블록의 스코프에서만 보이는 식별자를 의미한다. let과 const 는 블록 스코프에서 선언한다.
*/

console.log('before block');

{
  console.log('inside block');
  const x = 3;
  console.log(x);
}// 독립블록
// x는 블록안에서만 살아있고 블록 밖으로 나가는 즉시 사라진다. 

console.log(`outside block ; x ={x}`); // x는 정의되지 않는다.
