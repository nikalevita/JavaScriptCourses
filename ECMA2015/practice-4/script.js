"use strict";
/*  exercise 1 */
console.log('-- exercise 1 --');
/*
	Задание №1. Promise
	Напишите функцию createPromiseRandom(min, max, delay), которая возвращает promise, который: 
	•	переходит в состояние fulfilled, если min меньше max и генерирует случайное число через delay миллисекунд в диапазоне от min до max;
	•	переходит в состояние rejected, если min больше max и возвращает объект ошибки.
	Для генерации случайных чисел можно использовать метод Math.random().
	Для проверки работы функции, вызовите ее с разными параметрами и после этого добавьте на promise обработчики, которые выведут результат работ promise на экран.
	Примеры использования функции:
	function createPromiseRandom(min, max, delay) {
	   return new Promise(function (resolve, reject) {
	      // Ваш код
	   });
	}
	let p1 = createPromiseRandom(1, 100, 2000);
	p1.then();
	let p2 = createPromiseRandom(1000, 100, 3000);
	p2.then();
	Через две секунды, на экране должно появится случайной число от 1 до 100.
	Через три секунды, на экране должна появится информация об ошибке.

*/
{

	function createPromiseRandom(min, max, delay) {
	   return new Promise(function (resolve, reject) {
	      // Ваш код
	   });
	}
	let p1 = createPromiseRandom(1, 100, 2000);
	p1.then();
	let p2 = createPromiseRandom(1000, 100, 3000);
	p2.then();

}