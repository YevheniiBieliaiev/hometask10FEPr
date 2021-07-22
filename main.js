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




/*2) Напишите функцию concatStr(), которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя привязку аргументов с помощью bind, создайте новую функцию hello(), которая которая выводит приветствие тому, кто передан в ее параметре:

let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'
...
let finalResult = hello('Matt') // 'Hello Matt'
let finalResult = hello('John') // 'Hello John'*/


/*3) Напишите функцию showNumbers(), которая последовательно выводит в консоль числа в заданном диапазоне, с заданным интервалом (все данные должны передаваться как параметры функции).

tips: для реализации используйте функцию setInterval()

showNumbers(5, 10, 500); // 5 6 7 8 9 10

upd: Решите эту задачу с использованием рекурсивного setTimeout().*/




/*4) Какой результат выполнения будет у данного кода? Объяснить почему.

function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3));*/