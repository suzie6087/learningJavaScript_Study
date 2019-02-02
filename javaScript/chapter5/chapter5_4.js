/*
    5.4 비교 연산자

    비교 연산자는 두개의 값을 비교한다.
    타입까지 완전한게 일치한다면  (===), 값이 동등하다면 (==)

    일치 : 두값이 같은 객체를 가리키거나, 같은 타입이고 값도 같다면 (원시타입)
    동등 : 두값이 같은 객체를 가리키거나, 같은 값을 갖도록 변활할 수 있다면 두값을 동등하다고 본다.

    관계 연산자는 관계가 있는 값을 비교하며, 문자열이나 숫자처럼 원래 순서가 있는 데이터 다입에만 사용할수있다.
    관계 연산자는 작다(<) , 작거나같다(<=),크다(>), 크거나같다(>=)  4가지가 있다.
*/

const n = 5;
const s = "5";

console.log(n === s); // false 원시 타입이 안맞는다
console.log(n !== s); // true
console.log(n === Number(s)); // true 문자 타입을 숫자 타입으로 바꿨다.
console.log(n !== Number(s)); // false
console.log(n == s);  // true 단순 갑만 비교하자면 같다.
console.log(n != s); // false


const a = { name: "an object" };
const b = { name: "an object" };
console.log(a === b); // false -- 객체는 항상 다르다.
console.log(a !== b); // true
console.log(a == b);  // false
console.log(a != b); //true


// 관계 연산자
console.log("관계연산자 : 3>5",3>5);
console.log("관계연산자 : 3>=5",3>=5);
console.log("관계연산자 : 3<5",3<5);
console.log("관계연산자 : 3<=5",3<=5);

console.log("관계연산자 : 5>5",5>5);
console.log("관계연산자 : 5>=5",5>=5);
console.log("관계연산자 : 5<5",5<5);
console.log("관계연산자 : 5<=5",5<=5);
