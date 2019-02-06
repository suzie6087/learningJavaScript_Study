/*
    7.6 함수, 클로저, 정적 스코프

    클로져 (closure) : 함수가 특정 스코프에 접근 할수 있도록 의도적으로 그 스포크에 정의하는 경우가 많다.
                        스코프를 함수 주변으로 좁히는것 이라고 생각하면 된다.
*/

let globalFunc;  // 정의되지 않은 전역 함수
{
   let blockVar = 'a';   // 블록 스코프에 있는 변수
   globalFunc =  function(){
     console.log(blockVar);
   }
}
globalFunc();           // "a"
// 블록 스코프와 그 부모인 전역 스코프가 클로져를 생성한다. globalFunc를 어디서 호출하든, 이 함수는 클로저에
// 들어있는 식별자에 접근이 가능하다.

let f;          // 정의되지 않은 함수
{
  let o = { note:'Safe'};
  f = function(){
    return o;
  }
}
let oRef = f();
oRef.note = "Not so safe after all! "
