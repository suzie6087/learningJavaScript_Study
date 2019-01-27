
/*
3.1 변수와 상수

변수(variable) : 이름이 붙은 값. 값은 언제든지 변경 가능

변수를 선언(생성)하고 초깃값을 할당하는 두가지 일을 합니다.

변수는 선언할때는 꼭 초기값을 지정하는건 아니다. 초기값을 할당 하지 않으면 암싣적으로 특별한값  undefined가 할당된다.

변수를 선언할때 여러개를 선언 가능하다.

상수(constant) : 변수와 마찬가지로 값을 할당받을수 있다. 하지만 한번 할당한 값을 바꿀 수는 없다. ES6에서 새로 생김
*/

/*
    let 이란 키워드는 ES6부터 생김.
*/
let currentTempC = 22;//섭씨온도


/*
    let은 변수 선언에만 쓰이고, 각 변수는 한번만 선언가능
*/
currentTempC = 22.5; // 값 변경

let targetTempC; // undefined 가 할당됨.

let targetTempC,room1 ="conference_room_a", room2 = "lobby"; // let문 하나에 여러개 변수 선언.

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30; // 여러개의 const 선언이 가능하다.


/*
    3.2 변수와 상수중 어떤것을 써야 할까?
     - 변수보다는 상수를 써야 한다. 데이터의 값이 아무 때나 막 바뀌는것보다는, 고정된 값이 이해하기 쉽다.
       따라서, 우선 상수를 먼저 생각해야된다.
       상수를 쓰면 안되고, 항상 변수를 써야하는 경우도 있다. 루프제어에는 변수를 써야 한다. 시간이 지나면서 값이 바뀌는 경우에도 변수를 써야한다.
        Ex) currentTempC , targetTempc 같은 변수가 좋은예

*/

/*
    3.3 식별자 이름
     변수와 상수, 함수 이름을 식별자(identifier)라고 부른다. 식별자에는 규칙이 존재한다.
       - 식별자는 반드시 글자나 달러 기호($), 밑줄(_)로 시작해야한다.
       - 식별자에는 글자와 숫자, 달러기호, 밑줄만 쓸 수 있습니다.
       - π 같은 유니코드 문자도 쓸수 있다.
       - 예약어는 식별자로 쓸수 없다.

    자바 스크립트 식별자 표기법 -가장 널리쓰이는 두가지
     1. 카멜 케이스
      -currentTempC같은 꼭 낙타의 등을 연상시키는 식별자 표기법.
     2. 스네이크 케이스
      - current_temp_c 같은 것을 스네이크 케이스라고한다.

    식별자를 만들 때 유의사항
     - 식별자는 대문자로 시작해서는 안된다.
     - 밑줄 한개 또는 두 개로 시작하는 식별자는 아주 특별한 상황, 또는 '내부'변수에서만 사용.
     - 제이쿼리를 사용할 경우, 달러 기호로 시작하는 식별자는 보통 제이쿼리 객체라는 의미이다. 
*/

/*
    3.4 리터럴
     리터럴 (literal) - 값을 프로그램 안에서 직접 지정한다는 의미이다. 숫자형 리터럴와 문자형 리터럴이 존재한다.
                        자바 스트립트는 당신이 제공한 리터럴의 값을 받아 데이터를 만든다.
            숫자형 리터럴  : 22.5 , 22
            문자형 리터럴  : "conference_room_a"
*/

let room1 = "conference_room_a"; // "conference_room_a" 따옴표안은 리터럴이다.

let currentRoom = room1; // 이제 currentRoom의 값은
                        // room1의 값과 같다.
currentRoom = conference_room_a; // 에러가 일어남.
                                 // conference_room_a라는 식별자는 존재하지 않는다.


/*
    3.5 원시 타입과 객체
     자바 스크립트의 값은 원시값 또는 객체 이다.
     원시타입은 총 6가지이다.
     - 숫자
     - 문자열
     - boolean
     - null
     - undefined
     - symbol

     이외에 객체(object) - 원시값과 달리 객체는 여러가지 형태와 값을 가질 수 있다. 객체의 유연한 설징 때문에 커스텀 데이터 타입을 만들때 객체사용을 한다.
     자바스트립트에 내장된 객체 타입
     - Array
     - Date
     - RegExp
     - Set 과 WeakSet

     마지막으로 원시 타입 중 숫자와 문자열, 불리언에는 각각 대응하는 객체 타입이 있다.
     - Number
     - String
     - Boolean

     이들 대응하는 객체에 실제 값이 저장되지는 않는다. 이들은 대응하는 원시 값에 기능을 제공하는 역활을 한다. (???)

*/
let str = "hellow"; // str 불변값인 "hello"로 초기화
str = "world";      // "world"인 새로운 불변값 할당.

/*
    3.6 숫자
    자바스트립트에서는 다른 프로그래밍 언어와 마찬가지로 실제 숫자의 근사치를 저장 할 때 IEEE-764배 정도의 부동소수점 숫자 형식 사용
    - 더블 이라고 한다.

    자바스크립트에서는 숫자형 데이터 타입은 하나밖에 없다.
    자바스트립트는 10진수, 2진수, 8진수, 16진수의 4가지 숫자형 리터럴을 인식합니다.


*/
let count = 10;       //숫자 리터럴,  count는 더블 이다.
const blue = 0x0000ff; // 16진수. 16진수 ff는 10진수 255와 같다.
const umask = 0o0022;  // 8진수. 22는 10진수 18과 같다.
const roomTemp = 21.5; // 십진수
const c = 3.0e6;       // 지수(3.0 x 10^6 = 3,000,000)
const e = -1.6e-19;    // 지수(-1.6 x 10^-19 = 0.00000000000000016)
const inf = Infinity;  // 무한
const ninf = -Infinity; // 음의 무한
const nan = NaN;      // "숫자가 아님"

const small = Number.EPSILON; // 1 더 했을 때 1과 구분되는 결과를 만들수 있는
                              // 가장 작은 값이다. 근사치는 2.2e-16이다.
const bigInt =  Number.MAX_SAFE_INTEGER; // 표기 할 수 있는 가장 큰 정수
const max =  Number.MAX_VALUE;           // 표기 할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER;  // 표기 할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE;            // 표기 할 수 있는 가장 작은 숫자
const nInf = Number.NEGATIVE_INFINITY;   // - Infinity
const nan = Number.NaN;                  // NaN
const inf = Number.POSITIVE_INFINITY;    // Infinity

/*
    3.7 문자열
    문자열은 텍스트 데이터 이다. 자바 스크립트의 문자열은 유니코드 텍스트이다.
    자바스크립트의 문자열 리터럴은 작은 따옴표(''), 큰 따옴표 (""), 백틱(`` -어퍼스트로피)을 사용한다
    백틱은 ES6에서 도입된 것이다. 템플릿 문자열에 사용된다.

    3.7.1 이스케이프

    텍스트 데이터와 프로그램 자체를 구별할 필요가 있다.
    역슬래시(\)를 써서 이스케이프 하면 문자열이 여기서 끝나지 않았다고 자바 스크립트에게 알릴수 있다.

*/
const dialog = 'Sam looked up, and said "hello, Old friend!", as Max walked in.';
const imperative = "Don't do that!";
// 개별적은로 쓴다면 상관이 없지만 만약 두개를 합쳐서 쓴다면? 오류가 발생한다.
//const dialog = "Sam looked up and said "don't do that!" to max";

// 어떤 따옴표를 쓰더라도 오류가 난다. 이때, 쓸수 있는게 역슬래시(\)를 써서 이스케이프 하면 문자열이 여기서 끝나지 않았다고 자바 스크립트에게 알릴수 있다.
const dialog1 = "He looked up and said \"don't do that!\" to Max";
const dialog2 = 'He looked up and said "don\'t do that!" to Max';

//문자열에서 역 슬래시를 쓸때, 자기 자신을 이스케이프 할 수 있다.(???)
const s = "In JavaScript, use \\as and escape character in strings";

/*
    3.8 특수문자
    널리 쓰이는 특수 문자

    - \n : 줄바꿈 문자
    - \r : 캐리지 리턴
    - \t : 탭
    - \' : 작은 따옴표
    - \" : 큰 따옴표
    - \` : 백틱
    - \$ : 달러 기호
    - \\ : 역슬래시
    - \uXXXX : 임의의 유니 코드 포인트
    - \xXX : 리턴 -1 문자

    자주 쓰이지 않.는. 특수 문자.
     - \0 : null문자
     - \v : 세로탭
     - \b : 백스페이스
     - \f : 폼 피드


    3.8.1 템플릿 문자열
     값을 문자열 안에 써야 하는 일이 많은데, 이때 문자열 병합을 통해 변수나 상수를 문자열 안에 쓸 수 있다.

     ES6에서는 문자열 템플릿 이라는 기능 도입, 문자열 채우기 라고도 불림.
     문자열 템플릿은 문자열의 정해진 위치에 값을 채워 넣는 간편한 방법.  백틱을 사용한다.

    3.8.2 여러 줄 문자열
    소스 코드에서 문자열을 여러 행에 나눠 써야 할 때  문자열 병합을 사용.

    3.8.3 숫자와 문자열
    숫자를 따옴표 안에 넣으면 숫자열이 아니라 문자열이 된다. 자바스크립트는 필요하다면 숫자가 들어있는 문자영을 자동으로 숫자로 바꾼다.
    숫자가 필요할땐 숫자를 써라. (따옴표 쓰지마라)
*/
let currentTemp = 19.5;
const message = "the current temperature is "+ currentTemp +"\u00b0C";

// 문자열 템플릿 사용
let currentTemp = 19.5;
const message = `the current temperature is ${currentTemp} \u00b0C`;

// 3.8.3 예시
const result1 = 3+'30'; // 3이 문자열로 바뀐다. 결과는 문자열 '330'
const result2 = 3*'30'; // '30' 이 숫자로 바뀐다. 결과는 숫자90


/*
    3.9 불리언
    불리언은 true와 false 두가지 값밖에 없는 데이터 타입.  0 -false, 1 - true
    불리언 쓸때 따옴표 안에 넣지 않도록 조심.
*/
let heating = true;
let cooling = false;

/*
    3.10 심볼
    심볼(symbol)은 유일한 토큰을 나타내기 위해 ES6에서 도입된 새 데이터 타입.
    항상 유일하다.
    객체와 유사하다.
    확장성 있는 코드를 만들 수 있다.

    심볼은 Symbol()생성자로 만든다. 자바와 달리 대문자로 시작하는 식별자는 new와함께 쓴다. (???)

    고유의 식별자가 필요하다면 심볼을 써라

*/
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset");
RED === ORANGE // false : 심볼은 모두 서로 다릅니다.


/*
    3.11 null과 undefined
    null과 undefined 는 자바스크립트의 특별한 타입이다.
    null은 프로그래머에게 허용된 데이터 타입
    undefiend는 자바스크립트 자체에서 사용.

    변수의 값을 아직 모르거나 적용할 수 없는 경우에는 대부분 null이 더나은 선택이다.
*/
let currentTemp; // 암묵적으로 undefined
const targetTemp = null; // 대상온도는 null, 즉, 아직모르는 값이다.
currentTemp = 19.5; // 값을 넣어준다.
currentTemp = undefined; // 권장 하지않는다.   (???)


/*
    3.12 객체
    객체는 여러 가지 값이나 복잡한 값을 나타낼 수 있으며, 변할 수도 있다. 객체의 본질은 컨테이너다. 안에 들어가는 내용물은 바뀔수 있지만, 컨테이너
    자체는 바뀔수 없다.

    객체의 콘텐츠는 프로퍼티 또는 멤버라고 한다.
    프로퍼티는 이름(키)과 값으로 구성, 이름은 반드시 문자열 혹은 심볼 , 어떤 타입이든 상관없고 다른객체여도 상관없음.

    유효한 식별자인 경우 (.)으로 접근
    유효하지 않은 식별자의 이름을 쓴경우에는
    대괄호([])로 프로퍼티에 접근 할 수 있다.

    심볼 프로퍼티 접근도 대활호([]) 사용

    객체에는 함수도 담을수 있다.
    객체에서 프로퍼티를 제거할 때는  delete 연산자를 사용한다.
*/

// 객체 만들기
const obj = {};
// color프로퍼티 추가
obj.color = "yellow";
// 프로퍼티 접근
obj["not an identifier"] = 3;
obj["not an identifier"]; //3
obj["color"]; // "yellow"
// 심볼 프로퍼티 접근
const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

// 객체를 만드는 동시에 프로퍼티 만들기
const sam1 = {
    name: 'sam',
    age: 4

};
const sam2 = {name:'Sam',age:4}; // 한줄 선언
// sam1과 sam2는 엄연히 다른 객체
const sam3 = {
    name:'Sam',
    classification:{
        kingdom:'Anamalia',
        phylum: 'Chordata',
        class:'Mamalia',
        order: 'Carnivoria',
        family:'Felidae',
        subfamily:'Felinae',
        genus: 'Felis',
        specied:'catus'
    }
};

sam3.classification.family;
sam3["classification"].family;
sam3.classification["family"];
sam3["classification"]["family"];
// 모두 같은 값

//함수 사용
sam3.speak= function(){return "mew!"};
sam3.speak();

// 객체에서 프로퍼티 제거
delete sam3.classification;
delete sam3.speak;


/*
    3.13 Number, String, Boolean객체

    두가지 목적이 있다.
    1. Number.INFINTY같은 특별한 값을 저장
    2. 함수 형태로 기능을 제공

*/
const s = "hello";
s.toUpperCase(); //"HELLO" // 임시객체 안에 함수가 들어있다

const s ="hello";
s.rating = 3; //
s.rating; // undefined   (???)

/*
    3.14 배열

    배열 콘텐츠에는 항상 순서가 있고, 키는 순차적인 숫자이다. 배열은 유용한 매서드를 많이 가진 데이터 타입니다.

    특징
    - 배열 크기는 고정되지 않는다. 언제든 요소를 추가, 삭제 할 수 있다.
    - 요소의 데이터 타입을 가리지 않는다.
    - 배열 요소는 0부터 시작.

    length : 요소 숫자 반환하는 프로퍼티

    배열에 접근할 때는 대괄호 안에 요소의 인덱스 번호를 넣는다.

    배열의 요소값을 덮어 쓸 때는 새값을 할당.

*/
const a1 = [1,2,3,4]; // 숫자로 구성된 배열
const a2 = [1,'two', 3, null]; // 여러가지 타입으로 구성된 배열
const a3 = [
    "what the hammer? what the chain?",
    "in what furance was thy brain?"
];              // 여러줄로 정의된 배열
const a4 = [
    {name:"Ruby",hardness:9},
    {name:"Diamond", hardness:10}
];              // 객체가 들어있는 배열
const a5 = [
    [1,2,3],
    [2,4,6]
];              // 배열이 들어있는 배열

// 요소 숫자를 반환하는 length 프로퍼티
const arr = ['a','b','c'];
arr.length; //3

// 배열 요소 접근
const arr = ['a', 'b', 'c'];
// 첫번째 요소를 가져옵니다.
arr[0];
//arr의 마지막 요소의 인덱스 arr.length-1
arr[arr.length-1];

// 배열의 요소값 덮어 씌우기
const arr = [1,2,'c',4,5];
arr[2] =3;  //  arr = [1,2,3,4,5]


/*
    3.15 객체와 배열 마지막의 쉼표
    필자는 마지막에 프로퍼티를 추가하는 일이 많으므로 마지막에 쉼표를 항상 사용했다.
    하지만 이건 끊임없이 논쟁중이며, 널리사용되는 json에서는 마지막 쉼표는 허용하지 않는다.
*/

/*
    3.16 날짜
    날짜와 시간은 내장된 Date객체에서 담당. 사용하기 어렵고, 타임존이 다른 날짜를 다둘때는 매우 어렵다.

    현재 날짜와 시간을 나타내는 객체를 만들 때는 new Date()를 사용한다.

*/

// 현재 날짜와 시간
const now = new Date();
now;
// 특정 날짜
const halloween = new Date(2019,9,31);
// 특정 날짜와 시간
const halloweenParty = new Date(2019,9,31,19,0)
//날짜 객체는 만들면 쓸수 있는 프로퍼티 ?? 매서드??
halloweenParty.getFullYear();
halloweenParty.getMonth();
halloweenParty.getDay();
halloweenParty.getDay();
halloweenParty.getHours();
halloweenParty.getMinutes();
halloweenParty.getSeconds();
halloweenParty.getMilliseconds();

/*
    3.17 정규 표현식
     자바스크립트의 정규표현식은 RegExp 객체를 사용.
     슬래시 한쌍(/.../)사이에 심볼을 넣는 리터럴 문법도 있습니다.
*/
// 극히 간단한 이메일 정규 표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;


/*
    3.18 맵과 셋
    ES6에서 새로운 데이터 타입 Map과 Set
    짝 개념인 WeakMap과 WeakSet

    맵은 객체와 마찬가지로 키와 값연결 하지만 객체보다는 유리한 부분이 있다.
    셋은 배열과 비슷하지만 중복이 허용되지 않는다.

*/


/*
    3.19 데이터 타입 변환

    3.19.1 숫자로 바꾸기

    문자열을 숫자로 바꾸기
    1. Number 객체 생성자 사용
    2. 내장 함수인 parseInt나 parseFloat 함수 사용

    Date 객체를 수샂로 바꿀 때는 valueOf()메서드 사용

    불리언 값 1(true)이나 0(false)으로 바꿔야 할 때 조건 연산자 사용.

    3.19.2 문자열로 변환
    모든 객체에는 문자열 표현을 반환하는 toString() 메서드가 있다.

    3.19.3 불리언으로 변환
    부정 연산자(!)를 사용하여 모든값을 불리언 타입으로 바꿀수 있다.

*/


// Number 객체 생성자 사용 , 숫자로 바꿀수 없는 문자열에서는 NaN이 반환된다.
const numStr = "33.3";
const num = Number(numStr);

// parseInt나 parseFloat 함수 사용
const a = parseInt("16 volts",10);
const b = parseInt("3a",16);
const c = parseFloat("15.5 kph");

// 날짜 숫자 변환
const d = new Date();
const ts = d.valueOf();

// 불리언 타입 변환
const b = true;
const n = b ? 1 : 0;

// 문자열 변환
const n = 33.5;
n; // 숫자 반환
const s =  n.toString();
s; // 문자열 반환

// 불리언으로 변환
const n = 0;
const b1 = !!n;
const b2 = Boolean(n);


/*
    3.20 요약

    핵심 요약
    - 자바스크립트에는 문자열, 숫자, 불리언, null, undefined, 심볼 여섯가지 원시 타입 과 객체 타입이 있다.
    - 자바스크립트의 모든 숫자는 더블이다.
    - 배열은 특수한 객체이며, 객체와 마찬가지로 매우 강렬하고 유연한 데이터 타입이다.
    - 날짜, 맵, 셋, 정규표현식 등 자주 사용할 다른데이터 타입들은 특수한 객체타입이다.
*/
