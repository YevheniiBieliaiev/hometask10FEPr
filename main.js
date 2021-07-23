"use strict";
/*1)*/
const coffeeMachine = {
  message: "Your coffee is ready!",
  start: function () {
    setTimeout(() => console.log(this.message), 3000);
  }
}
coffeeMachine.start(); // 'Your coffee is ready!'

const teaPlease = {
  message: "Wanna some tea instead of coffee?",
}
setTimeout(coffeeMachine.start.bind(teaPlease), 3000);// 'Wanna some tea instead of coffee?'*/




/*2)*/
function concatStr(...args) {
  console.log(args.join("").concat());
}
let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'

let hello = concatStr.bind(this, "Hello", " ");
let finalResult_1 = hello('Bill'); // 'Hello Matt'
let finalResult_2 = hello('John'); // 'Hello John'




/*3)*/
function showNumbers(start, end, delay) {
  let timerId = setTimeout(function counter() {
    console.log(start);
    if (start < end) {
      start++;
      timerId = setTimeout(counter, delay);
    }
  }, delay);
}
showNumbers(5, 10, 500);




/*4) Какой результат выполнения будет у данного кода? Объяснить почему.*/
// debugger;
// function addBase(base) {
//   return function (num) {
//     return base + num;
//   };
// }
// let addOne = addBase(1);
// alert(addOne(5) + addOne(3));