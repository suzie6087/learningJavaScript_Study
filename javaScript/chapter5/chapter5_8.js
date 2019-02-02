/*
    5.8 ANd, OR, NOT

    자바스크립트가 지원하는 논리 연산자는
    AND(&&) , OR(||), NOT(!) 세가지 입니다.

    AND(&&) 는 한쪽이 false면 결과가 false, 모든값이 true여야만 true.
     OR(||) 는 한쪽이 true면 결과가 true.
     NOT(!) 은 false면 true로 true면 false로 변환

     5.8.1 단축 평가

     단축평가 - && 경우 앞에 나오는 값이 거짓이면 뒤에 나오는 값이 true여도 값은 false가 된다. 뒤의 값은 평가의 필요도 없이 판단하는걸 말한다.

     단축 평가가 중요한 이유, 두번째 피연산자에 부수효과가 있다고 한들 단축평가를 거지면 그 효과는 일어나지 않는다.

     5.8.2 피연산자가 불리언이 아닐 때 논리 연산자가 동작하는 방법
     불리언 피연산자를 사용하면 논리 연산자는 항상 불리언을 반환합니다.
     피연산자가 불리언이 아니라면, 결과를 결정한 값이 반환된다.

     AND(&&) 는 한쪽이 거짓같은값(false)이면 결과가 거짓같은값(false), 모든값이 참같은값(true)여야만 참같은값(true).
      OR(||) 는 한쪽이 참같은값(true)이면 결과가 참같은값(true).
      NOT(!) 은 거짓같은값(false)이면 참같은값(true)으로 참같은값(true)이면  거짓같은값(false)으로 변환

      5.8.3 조건 연산자

      조건 연산자는 자바스크립트의 유일한 3항연산자입니다.

      5.8.4 쉼표 연산자
      쉼표 연산자는 표현식을 결합하여 두표현식을 평가한후, 두번째 표현식의 결과를 반환합니다.
      표현식을 하나 이상 실행해야하지만 값으로 필요한 것은 마지막 표현식의 결과뿐일 때 쉼표 연산자를 유용하게 쓸수 있다.


*/

const skipIt= true;
let x = 0;
const result =  skipIt || x++;  // 논리 연산자 or  어느 한쪽이 참이면 결과가 참
console.log(result); // true

const doIt =  false;
let y = 0;
const result2 = doIt && y++;
console.log(result2);

// 논리 연산자의 이런 동작 방식을 활용한 간편한 팁 , 자주쓴다.
// const suppliedOptions= null;
// const options = suppliedOptions || {name:"Default"}
// console.log(options);

const doIt2 =  false;
const result3 = doIt2 ?"Did it!" : "Didn't do it?";
console.log(result3);

// 쉼표 연산자
let t = 0, o = 10, z;
z = (t++,o++);

console.log(z);
