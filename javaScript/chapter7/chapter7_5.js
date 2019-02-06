/*
    7.5 변수 숨기기.

    스코프 체인: 스코프의 계층적인 성격 때문에 어떤 변수가 스코프에 있는지 확인하는 개념
                현제 스코프체인에 있는 모든 변수는 스코프에 있는것이며, 숨겨지지않았다면 접근이 가능하다.
*/

{
  // block 1
  const x = 'blue';
  console.log(x);  // blue
}

console.log(typeof x); // undefined

{
  //block 2
  const x = 3;
  console.log(x); // 3
}

console.log(typeof x); // undefined

// 스코프 중첩되는 경우
// 이 예제는 변수 숨김을 잘보여주는 예이다.
{
  // 외부 블록
  let x = 'blue';
  console.log(x); //blue
  {
    // 내부 블록
    let x = 3;
    console.log(x); // 3
  }
  console.log(x);   //blue
}

console.log(typeof x); // undefined

//

{
  // 외부 블록
  let x = { color:"blue"};
  let y = x;              // y와 x는 같은 객체를 가리킨다.
  let z = 3;
  {
    // 내부 블록
    let x = 5;        // 이제 바깥의 x는 가려졌다.
    console.log(x);   // 5
    console.log(y.color); // blue ,y=x
    y.color = "red";
    console.log(z);   // 3 :  z는 숨겨지지 않았다.
  }
  console.log(x.color);  //red : 객체는 내부 스코프에서 수정됨
  console.log(y.color);  //red : x=y
  console.log(z);        //3
}
