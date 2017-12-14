"use strict";
/*  exercise 1 */
/*
Задание №1. Встроенные типы объектов
Создайте тип объектов Прямоугольник со свойствами координат верхнего левого (x1, y1) и нижнего правого (x2, y2) углов. 
Переопределите методы toString() и valueOf(). Метод toString() должен возвращать строку с описанием текущего состояния. Метод valueOf() должен возвращать текущий периметр.
*/
console.log('-- exercise 1 --');

var rectangle = {
	x1: 0,
	y1: 0,
	x2: 10,
	y2: -20
}

rectangle.toString = function(){
	return 'Координаты верхнего левого угла: (' + this.x1 + ',' + this.y1 + ') нижнего правого: (' + this.x2 + ',' + this.y2 + ')';
}

rectangle.valueOf = function(){
	return 'Периметр: ' + ((this.x2 - this.x1) + (this.y1 - this.y2)) * 2;
}

console.log(rectangle.toString());
console.log(rectangle.valueOf());


/*  exercise 2 */
/*
Задание №2. Встроенные типы объектов
Дана строка, которая содержит имена пользователей, разделенные запятой – "Login1,LOgin2,login3,loGin4". Разбейте эту строку на массив строк (чтобы отдельно были логины), и приведите их все в нижний регистр.
*/
console.log('-- exercise 2 --');

var str = "Login1,LOgin2,login3,loGin4";

console.log(str.toLowerCase().split(','));

/*  exercise 3 */
/*
Задание №3. Встроенные типы объектов
Напишите программу, которая запрашивает у пользователя строки (prompt()). Ввод строк должен быть завершен, когда пользователь вводит строку end. Далее программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки текст "Numbers: ", если нет – "No numbers: " и выводит результат в виде следующей таблицы:
+-----------------+---------------------+
| Исходная строка | Обработанная строка |
+-----------------+---------------------+
| строка_1        | строка_1_обр        |
+-----------------+---------------------+
| строка_2        | строка_2_обр        |
+-----------------+---------------------+
*/
console.log('-- exercise 3 --');
function setString(){
	var i = 0,
		flag = true,
		tempItem,
		flagNum,
		myArr = [],
		myArrRes = [];
	while (flag){
		tempItem = prompt('Введите строку (для завершения end) PS: для красоты 3 символа в строке', '');
		if(tempItem !== 'end'){
			myArr[i] = tempItem;
			for (var j = 0; j < tempItem.length; j++){
				if( !isNaN(Number(tempItem[j])) ){
					flagNum = 'Number: ';
					break;
				} else {
					flagNum = 'No number: ';
				}
			}
			myArrRes[i] = flagNum + tempItem;
			i++;
		} else {
			flag = !flag;
		}
	}
	console.log('+-----------------+---------------------+');
	console.log('| Исходная строка | Обработанная строка |');
	console.log('+-----------------+---------------------+');
	for(var i = 0; i < myArr.length; i++){
		console.log('| ' + myArr[i] + '             | ' + myArrRes[i]);
		console.log('+-----------------+---------------------+');
	}
}

//setString();

/*  exercise 4 */
/*
Задание №4. Встроенные типы объектов
Напишите функцию addTwoDays(date), которая принимает объект типа Date и добавляет к дате данного объекта два дня.
*/
console.log('-- exercise 4 --');

function addTwoDays(date){
	date.setHours(48);
	return date;
}

var myDate = new Date();
console.log(myDate);
console.log(addTwoDays(myDate)); /* ВОПРОС! ПОЧЕМУ ЕСЛИ НЕ УСТАНАВЛИВАТЬ ОПРЕДЕЛЕННУЮ ДАТУ, ПРОПАДАЮТ 4 ЧАСА??? */

/*  exercise 5 */
/*
Задание №5. Встроенные типы объектов
1. Создайте массив с элементами "Джаз", "Блюз";
2. Добавьте в конец элемент "Рок-н-Ролл";
3. Замените предпоследний элемент с конца на "Классика". Код замены должен быть универсальный, т.е. работать для массивов любой длины;
4. Удалите первый элемент массива и выведите его на экран;
5. Добавьте в начало элементы "Рэп" и "Регги".

Массив в результате каждого шага:
1. ["Джаз", "Блюз"]
2. ["Джаз", "Блюз", "Рок-н-Ролл"]
3. ["Джаз", "Классика", "Рок-н-Ролл"]
4. ["Классика", "Рок-н-Ролл"]
5. ["Рэп", "Регги", "Классика", "Рок-н-Ролл"]
*/
console.log('-- exercise 5 --');

var musicArr = ["Джаз", "Блюз"];
console.log(musicArr);
musicArr.push("Рок-н-Ролл")
console.log(musicArr);
musicArr.splice(musicArr.length-2, 1, "Классика");
console.log(musicArr);
var firstEl = musicArr.shift();
console.log('Удалили ' + firstEl);
console.log(musicArr);
musicArr.unshift("Рэп", "Регги");
console.log(musicArr);

/*  exercise 6 */
/*
Задание №6. Встроенные типы объектов
Расширьте тип объектов Array методом sortDesc(), который сортирует массив по убыванию.
// Ваш код
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]
*/
console.log('-- exercise 6 --');
Array.prototype.sortDesc = function (){
	return this.sort().reverse();
}
var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]

/*  exercise 7 */
/*
Задание №7. Встроенные типы объектов
Напишите функцию deleteEvenNumbers(array), которая принимает массив array, удаляет из массива array четные числа и возвращает его.
function deleteEvenNumbers(array) {
   // Ваш код
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]
*/
console.log('-- exercise 7 --');

function deleteEvenNumbers(array) {
	function deleteEven(val){
		return val % 2 != 0;
	}
	return array.filter(deleteEven);
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]

/*  exercise 8 */
/*
Задание №8. Встроенные типы объектов
Есть следующий код:
var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
   arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
Перепишите данный код, заменив цикл for на метод map().
*/
console.log('-- exercise 8 --');

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];

function listArr(val){
	return "<li>" + val + "</li>";
}
arrLength = arr.map(listArr);
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]

/*  exercise 9 */
/*
Напишите функцию matrixToArray(matrix), которая принимает двумерный массив (матрицу) matrix, разворачивает двумерный массив в одномерный и возвращает его. Данное задание необходимо решить при помощи аккумулирующих методов.
function matrixToArray(matrix) {
   // Ваш код
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
console.log('-- exercise 9 --');

function matrixToArray(matrix) {
	function reducer(accumulator, currentValue) {
		return accumulator.concat(currentValue);
	}
	return arr.reduce(reducer);
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]