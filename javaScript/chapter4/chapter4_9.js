/*
  4.3 유용한 제어문 패턴

      4.3.1 continue문을 사용하여 조건 중첩 줄이기
      특정조건이 맞을 때만 루프 바디를 실행해야 할때가 있다. 반복문 안에 반복문을 써야 할 경우 이다.

      4.3.2  break나 return 문을 써서 불필요한 연산 줄이기
      뭔가를 찾기 위해서 루프를 실행한다며, 찾으려는 것을 이미 찾은 후에는 루프 바디를 계속 실행할 필요가 없다.

      4.3.3 루프를 완료한 뒤 인덱스 값 사용하기
      break문을 써서 푸르를 일찍 종료했을때 인덱스 변수의 값이 필요할 때가 있다. for 루프가 끝나도 인덱스
      변수의 값은 그대로 유지된다는점을 활용 할수있다.

      4.3.4 배열을 수정할 때 감소하는 인덱스 사용하기
      배열에 루프를 실행하면서 루프 바디에서 배열을 수정하는건 위험하다.
      이런경우, 패턴을 감소하는 인덱스를 써서, 배열 마지막에 요소에서 루프를 시작하는 방법이다.
      이렇게 하면 배열에 요소를 추가하거나 제거해도 종료 조건이 바뀌는 일은 없다.



*/

while (funds > 1 && funds <100) {
    let totalBet = rand(1,funds);
    if (totalBet === 13) {
      console.log("Unlucky! Skip this round...");
    } else {
      // 플레이 ...
    }
}

 // continue를 써서 좀더 간결하게 만들어준다.
while (funds > 1 && funds <100) {
    let totalBet = rand(1,funds);
    if (totalBet === 13) {
      console.log("Unlucky! Skip this round...");
      continue;
    }
}

// 4.3.2 예제

 let firstPrime = null;
 for (let n of bigArrayOfNumbers) {
    if (isPrime(n) && firstPrime === null) {
        firstPrime = n;
    }
 }

 let firstPrime = null;
 for (let n of bigArrayOfNumbers) {
    if (isPrime(n)) {
        firstPrime = n;
        break;
    }
 }

 // 4.3.3 배열에 들어있는 첫번째 소수의 인덱스를 찾을 수 있다.

 let i = 0;
 for (; i < bigArrayOfNumbers.length; i++) {
   if (isPrime(bigArrayOfNumbers[i])) {
     break;
   }
 }
 if (i === bigArrayOfNumbers.length) console.log("No prime numbers!");
else console.log(`First prime number found at position ${i}`);


// 4.3.4
for (let i = bigArrayOfNumbers.length-1 ; i >= 0; i--) {
  if(isPrime(bigArrayOfNumbers[i]))bigArrayOfNumbers.splice(i,1);
}
