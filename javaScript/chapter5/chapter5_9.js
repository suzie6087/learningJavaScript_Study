/*
    5.9 연산자 그룹

    5.9.1 비트 연산자
    비트 연산자는 비트를 직접 조작한다.

    & 비트 AND
    | 비트 OR
    ^ 비트 XOR
    ~ 비트 NOT

    << 왼쪽쉬프트
    >> 오른쪽 오른쪽쉬프트

    5.9.2 typeof연산자
    typeof연산자는 피연산자의 타입을 나타내는 문자열을 반환한다.

    5.9.3  void 연산자
    void 연산자가 하는 일인 하나 피연산자를 평가후에 undefinded를 반환

    5.9.4 할당 연산자
    할당 연산자는 변수에 값을 할당한다.
    등호의 왼쪽에 있는것은 반드시 변수나 프로퍼티, 배열 요소중 하나여야한다.
    표현식 좌변에 있는것은 반드시 값을 저장할수 있어야한다.


*/

const FLAG_EXCUTE = 1;
const FLAG_WRITE = 2;
const FLAG_READ = 4;


// 할당 연산자

let v, v0;
v = v0 = 9.8;

const nums =  [3,5,15,7,5];
let n, i=0;
while((n = nums[i])<10&&i++<nums.length){
  console.log(`Number less than 10:${n}.`);
}
console.log(`Number greater than 10 found : ${n}`);
console.log(`${nums.length -i -1} numbers remain.`);
