/*
  5.13 표현식과 흐름 제어 패턴

  5.13.1 if...else 문을 3항 연산자로 바꾸기
  if ...else문의 목적이 변수의 값을 얻는것이라면 일반적으로 if...else 대신 3항 연산자를 쓰는 편이 좋다.

  5.13.2 if문을 단축 평가하는 or 표현식으로 바꾸기
*/

//5.13.1 if...else 문을 3항 연산자로 바꾸기

if (isPrime(n)) {
    label = 'prime';
} else {
  label = 'non -prime'
}

label = isPrime ? 'prime' : 'non -prime';


//   5.13.2 if문을 단축 평가하는 or 표현식으로 바꾸기
if(!options) options= {};

options =  options || {};
