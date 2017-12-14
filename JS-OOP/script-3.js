"use strict";
/*  exercise 1 */
/*
Есть следующий код:
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = // Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().

*/
console.log('-- exercise 1 --');
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}

// 1??
var tomFormat = function(beginMsg, endMsg) {
   format.call(user, beginMsg, endMsg);
};
tomFormat("<<<", ">>>"); // "<<<Tom>>>

// 2
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"


/*  exercise 2 */
/*
Есть следующий код:
function mul(a, b) {
   return a * b;
}
var doubleMul = // Ваш код
var qudraMul = // Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20
Используя функцию mul() и карринг создайте две функции doubleMul() и qadraMul(), которые умножают числа на 2 и на 4 соответственно.
*/
console.log('-- exercise 2 --');

function mul(a, b) {
   return a * b;
}

var doubleMul = mul.bind(null, 2);

var qudraMul = mul.bind(null, 4);

console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

/*  exercise 3 */
/*
Напишите аналог метода bind():
function bind(func, context) {
   // Ваш код
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"

*/
console.log('-- exercise 3 --');
function bind(func, context) {
	return function(){
		func.call(context);
	}
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20" 


/*  exercise 4 */
/*
Напишите конструктор для объектов Аудиоплеер, в котором есть приватное свойство громкость звука, для доступа к этому свойству реализуйте: 
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер.
Громкость может быть в диапазоне от 0 до 100.
*/
console.log('-- exercise 4 --');

function AudioPlayerVol(vol){

	var _vol = 0;

	function validationVol(vol){
		if (typeof(vol) === 'number' && vol >= 0 && vol <= 100){
			_vol = vol;
		}
	}

	validationVol(vol);

	this.getVol = function(){
		return _vol;
	};

	this.setVol = function(vol){
		validationVol(vol);
	};

	this.volume = function(vol){
		if (vol === undefined) {
			return _vol;
		}else {
			validationVol(vol);
		}
	};
}

var myVol = new AudioPlayerVol(50);
console.log(myVol.getVol());
myVol.setVol(30);
console.log(myVol.getVol());
console.log(myVol.volume());
myVol.volume(70);
console.log(myVol.volume());

/*  exercise 5 */
/*
Напишите конструктор для объектов Сумматор, со следующим функционалом:
1. Приватное свойство firstNumber;
2. Приватное свойство secondNumber;
3. Публичное свойство result;
4. Приватный метод calc(), который записывает в result сумму свойств firstNumber и secondNumber;
5. Единые методы геттер-сеттер для свойств firstNumber и secondNumber, во время работы методов как сеттер, должна происходить валидация (устанавливать можно только значения типа Number), если валидация происходит успешно, должен вызываться метод calc(). Получается, что при успешной установке либо firstNumber либо secondNumber, происходит перерасчет result.
*/
console.log('-- exercise 5 --');

function Summator(firstNumber, secondNumber){
	var _firstNumber = 0,
		_secondNumber = 0,
		self = this;

	this.result = 0;

	function NumValidFirst(firstNumber){
		if (typeof(firstNumber) === 'number'){
			_firstNumber = firstNumber;
		}
	}
	NumValidFirst(firstNumber);

	function NumValidSecond(secondNumber){
		if (typeof(secondNumber) === 'number'){
			_secondNumber = secondNumber;
		}
	}
	NumValidSecond(secondNumber);

	this.firstNumber = function(firstNumber){
		if (firstNumber === undefined) {
			return _firstNumber;
		}else {
			NumValidFirst(firstNumber);
			_calc();
		}
	};

	this.secondNumber = function(secondNumber){
		if (secondNumber === undefined) {
			return _secondNumber;
		}else {
			NumValidSecond(secondNumber);
			_calc();
		}
	};

	var _calc = function(){
		self.result = _firstNumber + _secondNumber;
	};
	_calc();
}

var mySumm = new Summator(50, 30);
console.log(mySumm.firstNumber());
console.log(mySumm.secondNumber());
console.log(mySumm.result);

mySumm.firstNumber(5);
mySumm.secondNumber(10);
console.log(mySumm.firstNumber());
console.log(mySumm.secondNumber());
console.log(mySumm.result);

/*  exercise 6 */
/*
Напишите код для "безопасного" вычисления периметра и площади прямоугольника в виде модуля.
Сторонами прямоугольника может быть только число (тип данных Number, значения других типов данных нельзя устанавливать), значение которого, строго больше 0.
*/
console.log('-- exercise 6 --');

var moduleRectInfo = (function () {
	var a;
	var b;
	function per(){
		return 'Perimetr: ' + (a + b) * 2;
	}
	function area(){
		return 'Area: ' + a * b;
	}
	return {
		setA: function(num){
			if(typeof(num) === 'number' && num > 0){
				a = num;
			}
		},
		setB: function(num){
			if(typeof(num) === 'number' && num > 0){
				b = num;
			}
		},
		per: function(){
			return per();
		},
		area: function(){
			return area();
		}
	}
}());

moduleRectInfo.setA(2);
moduleRectInfo.setB(4);
console.log(moduleRectInfo.per());
console.log(moduleRectInfo.area());