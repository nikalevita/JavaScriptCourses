"use strict";
/*  exercise 1 */
/*
Задание №1. Исключения
Напишите функцию sumSliceArray(arr, first, second), которая принимает массив arr и два числа (first и second) – порядковые номера элементов массива, которые необходимо суммировать. Например, если ввели 3 и 5 – суммируются 3-й и 5-й элементы.
Функция должна генерировать исключения если были введены не числа, и когда одно из чисел, или оба больше размера массива.
Напишите код, который использует данную функцию, предусмотрите обработку возможных исключений.
*/
console.log('-- exercise 1 --');

function sumSliceArray(arr, first, second) {

	try {
		if (typeof(first) === 'number' && typeof(second) === 'number' && first > 0 && first <= arr.length && second > 0 && second <= arr.length){
			console.log(arr[first - 1] + arr[second - 1]);
		} else {
			throw new Error("Вы ввели не то, что нужно!");
		}
		
	} catch (error) {
		console.log(error.name);
		console.log(error.message);
		console.log(error.stack);
	}

}

sumSliceArray([1,2,3,4,5], 5, 6);

/*  exercise 2 */
/*
Задание №2. Исключения
Возьмите функцию sumSliceArray(arr, first, second) из предыдущего задания и напишите код, который ее использует, но перед самим использованием проверяет все параметры на правильность. Таким образом, никогда не должны генерироваться исключения, которые есть внутри данной функции.
*/
console.log('-- exercise 2 --');

var myFirst = 5,
	mySecond = '5',
	myArr = [1,2,3,4,5];

if (typeof(myFirst) === 'number' && typeof(mySecond) === 'number' && myFirst > 0 && myFirst <= myArr.length && mySecond > 0 && mySecond <= myArr.length){
	sumSliceArray(myArr, myFirst, mySecond);
}

/*  exercise 3 */
/*
Задание №3. Инъекция зависимостей
Расширьте пример из лекции (любой из трех) путем добавления операции, которая изменяет знак числа.
*/
console.log('-- exercise 3 --');

function ConstructorInjection(argument, operation) {
	this.argument = argument;
	this.result = 0;
	this.operation = operation; // Зависимость
}

ConstructorInjection.prototype.someOperation = function (){
	this.operation.argument = this.argument;
	this.operation.doOperation();
	this.result = this.operation.result;
};

function Increment() {
	this.argument = 0;
	this.result = 0;
}

Increment.prototype.doOperation = function () {
	this.result = this.argument + 1;
};

var inc = new Increment(); // Создание зависимости
var ci = new ConstructorInjection(10, inc); // Инъекция

ci.someOperation();

console.log(ci.result); // 11

/* My code */
function ChangeSign() {
	this.argument = 0;
	this.result = 0;
}

ChangeSign.prototype.doOperation = function () {
	this.result = this.argument * -1;
};

var changeSign = new ChangeSign(); // Создание зависимости
var chs = new ConstructorInjection(5, changeSign); // Инъекция

chs.someOperation();

console.log(chs.result); //