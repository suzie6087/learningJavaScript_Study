/*
  4.2.4 for 루프의 다른 패턴

  쉼표 연산자를 쓰면 초기화와 마지막 표현식에서 여러 문을 결합할 수 있다.



*/

for (let temp, i = 0 , j = 0 ; j < 30; temp = i , i = j , j = i + temp) {
  console.log(j);
}
// 변수 temp와 i,j를 동시에 선언 , 마지막 표현식에서 세변수를 동시에 조작했다. 
// for 루프의 제어부에 아무것도 쓰지 않으면 무한 루프가 만들어진다.

for(;;)console.log("I'll repeat forever!");
//  for 루프에서 존건을 생략하면 항상 true로 평가 되므로 루프를 빠져나갈 수 없다.


let s = '3'; // 숫자가 들어있는 문자열
for(; s.length < 10; s = ' '+ s); // 문자열의 길이를 조건으로 썼다.
                                  // 여기서 사용한 for루프 마지막에 세미콜론이 없으면 에러가 난다.
for(let x = 0.2 ;x <3.0 ; x += 0.2) // 제어 변수가 정수가 아니어도 괜찮다.
    console.log(x);

for( ; !player.isBroke ; )        // 조건에 객체 프로퍼티를 썼다. [???]
    console.log("Still playing! ");

for([initialization] ; [condition] ; [final-expression])
    statement

[initialization]
while ([condition]) {
  statement
  [final-expression]
}

// for 문을  while 문으로 변경
