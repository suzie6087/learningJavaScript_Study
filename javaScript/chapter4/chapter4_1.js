/*
    4.1 제어문의 기초
    4.1.1 while 루프
    while 루프는 조건을 만족하는 동안 코드를 계속 반복한다.

    4.1.2 블록문
    블록문은 엄밀히 말하면 제어문은 아니지만 제어문관 함께 쓰인다.

    4.1.3 공백
    들여쓰기는 항상 의미가 명확하게 드러나도록 써야한다.

    4.1.4 보조 함수

    4.1.5 if.. else 문
    while 문과 다르게 if-else문 자체에는 반복 기능이 없다. 판단하고, 그에 따라 움직인다.

    4.1.6 do ... while 루프
     while 루프와 차이
     - 시작하면서 조건을 검사하지 않고 마지막에 검사한다.
     - do..while  루프는 최소 한번을 실행하려 할 때 사용한다.
     - 거짓값으로 시작하게 되면 실행을 하지 않는다. 
    4.1.7 for 루프
    어떤 일을 정해진 숫자만큼 반복하려 할 때, 특히 그 일을 지금 몇번째 하는지 알아야 할 때입니다.

    4.1.8 if문
     if-else문과 if문의 차이점
     - if-else 문에서는 모든 분기가 행동으로 연결됐지만, if 문에서는 분기중 하나만 행동하도록 연결
*/
// while 루프
let funds = 50; // 시작 조건
while(funds > 1 && funds < 100){
    // 돈 건다.

    // 주사위 굴린다.

    // 그림을 맞췄으면 돈을 가져온다.
}

// while 루프  + 블록문
let funds = 50; // 시작 조건
while(funds > 1 && funds < 100){
    funds = funds +2 // 2보전진
    funds = funds -1 // 1보 후퇴
}

// 공백 없이 써보기
while(funds > 1 && funds < 100)funds = funds +2;


// 보조 함수
// m 이상 n 이하의 무작위 정수를 반환한다.
function rand(m,n){
    return m = Math.floor((n - m + 1)*Math.random());
}
//크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환.
function randFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
      [rand(0.5)];
}


// do .. while 루프
let remaining = totalBet;
do{
  let bet = rand(1, remaining);
  let face  =  randFace();
  bets[face] = bets[face] + bet;
  remaining = remaining - bet;
}while (remaining > 0);


// for 루프
const hand = [];
for(let roll = 0 ; roll < 3 ; roll++){
  hand.push(randFace());
}

// if문
let winnings = 0;
for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0 ) {
      winnings = winnings + bets[face];
    } //if
}// for
funds = funds + winnings;
