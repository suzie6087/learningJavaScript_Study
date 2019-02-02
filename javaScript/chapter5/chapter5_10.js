/*
    5.10 해체 할당
    ES6에서 새로 도입한 해체 할당은 매우 환영 받는 기능이다.
    이 기능은 객체나 배열은 변수로 '해체'할 수 있다.

    객체는 해체할때는 반드시 변수이름과 객체의 프로퍼티 이름이 일치해야한다.
    프로퍼티 이름이 유요한 식별자인 프로퍼티만 해체 할당이 가능하다.

*/
//
// // 객체 선언
// const obj = { b:2, c:3, d:4};
//
// // 해체 할당
// const {a,b,c} = obj;
// console.log(a);
// console.log(b);
// console.log(c);
// // console.log(d);
//
// const obj = { b:2, c:3, d:4};
// let a,b,c;
//
// {a,b,c}=obj;
//
// ({a,b,c}=obj);

// 배열을 해체 할때는 배열요소에 대응할 변수 이름으 마음대로 쓸수 있으며 이들은 배열 순서 대로 대응한다.

// const arr = [1,2,3];
//
// // 배열 해체 할당
//
// let[x,y] = arr;
// console.log(x);
// console.log(y);
// // console.log(z); // 정의되지 않음

const arr = [1,2,3,4,5];

// 배열 해체 할당

let[x,y,...rest] = arr;
console.log(x);
console.log(y);
 console.log(rest);


let a =5, b=10;
[a,b] = [b,a];
console.log(a);
console.log(b);
