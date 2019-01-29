/*
4.2.3 메타 문법
메타문법은 다른 문법을 설명하는 문법이다.

메타 문법에서 기억해야할 것 두가지
1. 대괄호([])로 감싼 것은 옵션
2. 생략 부호(...)는 '여기에 들어가 내용이 더있다.'는 뜻.

*/
// while 문
while (conition) {
  statement
}
//condition이 참 같은 값이면 statement를 실행.

// if...else문
if (condition)
  statement1
[else
  statement2]
// condition이 참 같은 갑이면 statement1을 실행하고, 그렇지 않고 else 부분이 있다면 statement2를 실행.

// do while
do{
  statement
while (condition);

// statement는 최소한 한 번 실행하고,  conition이 참 같은 값인 동안 반복해서 실행한다.

// for문
for ([initialization] ; [condition] ; [final-expression])
  statement
// 루프에 들어가기 전에 initialization을 실행, condition이 true인 동안 statement를 실행,
// final-expression을 실행한 다음 condition을 다시 체크합니다.
