/*
  6.5 this 키워드

  함수 바디 안에는 특별한 읽기 전용 값이 this가 있다.

  일반적으로 this는 객체 프로퍼티인 함수에서 의미가 있다. 메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 된다.
*/

// const o = {
//   name: 'Wallance',
//   speak(){return `My name is ${this.name};`}
// }
//
// console.log(o.speak());

// 위 예제에서 중요한것은 this는 함수를 어떻게 호출 했는냐에 따라 달라진다는것이다.

// const o ={
//   name:'Julie',
//   greetBackwards: function() {
//     function getReverseName() {
//       let nameBackwards= '';
//       for(let i =this.name.length-1 ; i >= 0 ; i-- ){
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     }
//     return `${getReverseName()}si eman ym~`;
//   }
// };
//
// console.log(o.greetBackwards());
// // 실행 잘안됨

const o ={
  name:'Julie',
  greetBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackwards= '';
      for(let i =self.name.length-1 ; i >= 0 ; i-- ){
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()}si eman ym~`;
  }
};

console.log(o.greetBackwards())

// 실행 잘됨
