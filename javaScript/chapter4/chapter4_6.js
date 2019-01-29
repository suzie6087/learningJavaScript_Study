/*
  4.2.5 switch문

  switch문은 조건 하나로 여러가지 중 하나를 선택 할 수 있다. 따라서 참 값/ 거짓값 보다는 다양하게 나누는 조건을 사용.
*/

switch (expression) {
  case val1:
  // expression을 평가한 결과가 val1일때 실행
    [break;]
  case val2:
  // expression을 평가한 결과가 val2일때 실행
    [break;]
  default:
    // expression을 평가한 결과에 맞는 것이 없을 때 실행
    [break;]
}


// 토마스 예제

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 11:
    totalBet = 0;
    break;
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

// break 없는 case
switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 11:
  case 13:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

// 13이 왔을때 돈을 걸지않고 1펜스 기부
switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 13:
    totalBet = funds -1; //1 펜스 기부
    break;
  case 11:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
}

// default가 있는경우
switch (totalBet) {
  case 7:
    totalBet = funds;
    break;
  case 13:
    totalBet = funds -1; //1 펜스 기부
    break;
  case 11:
    totalBet = 0;
    break;
  case 21:
    totalBet = 21;
    break;
  default:
   console.log("No superstition here!");
   break;
}



// break  - >  return문으로 쓸수가 있다.
switch (totalBet) {
  case 7:
    return funds;
  case 13:
    return 0;
  default:
   return totalBet;
}


// switch문을 더 간결하게

switch (totalBet) {
  case 7: totalBet =funds  break;
  case 11: totalBet =0  break;
  case 13: totalBet =0  break;
  case 21: totalBet =21  break;
}
