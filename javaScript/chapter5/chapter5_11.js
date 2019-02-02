/*
  5.11 객체와 배열 연산자

  객체와 배열 함수에는 특별한 연산자가 있다.
   점 연산자(.)와 대괄호 연산자([]) 말고도 많다

   .           점연산자
   []          대괄호 연산자
   in          프로퍼티 존재 연산자
   new         객체 인스턴스화 연산자
   instanceof   프로토타입 체인 테스트 연산자
   ...          확산 연산자
   delete       삭제 연산자

    5.12 템플릿 문자열과 표현식

    `` 어퍼스트로피를 이용한 문자열


*/

// 템플릿 문자열
const roomTempC = 21.5;
const message =  `The current templet is ${roomTempC}`;
console.log(message);
