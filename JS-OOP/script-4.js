"use strict";
/*  exercise 1 */
/*
Напишите конструктор объектов Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. Для доступа к этим свойствам определите необходимые метод/методы.
На основе этого конструктора создайте два новых (наследники) – Прямоугольник и Круг. В этих конструкторах определите особые приватные свойства. (Например, длина диагонали для Квадрата и радиус для Круга). В каждый из конструкторов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.

*/
console.log('-- exercise 1 --');

function GeometricFigure(centerX, centerY){
	var _centerX = 0,
		_centerY = 0;

	function validationCenterX(centerX){
		if (typeof(centerX) === 'number'){
			_centerX = centerX;
		}
	}
	validationCenterX(centerX);

	function validationCenterY(centerY){
		if (typeof(centerY) === 'number'){
			_centerY = centerY;
		}
	}
	validationCenterY(centerY);

	this.centerX = function(centerX){
		if (centerX === undefined) {
			return _centerX;
		}else {
			validationCenterX(centerX);
		}
	};
	this.centerY = function(centerY){
		if (centerY === undefined) {
			return _centerY;
		}else {
			validationCenterY(centerY);
		}
	};
}

function Square(centerX, centerY, diagonal){

	GeometricFigure.call(this, centerX, centerY);

	var _diagonal;

	function validationD(diagonal){
		if (typeof(diagonal) === 'number' && diagonal >= 0){
			_diagonal = diagonal;
		}
	}
	validationD(diagonal);

	this.diagonal = function(diagonal){
		if (diagonal === undefined) {
			return _diagonal;
		}else {
			validationD(diagonal);
		}
	};

	this.info = function(){
		console.log('Информация по квадрату: координаты (' + this.centerX() + ',' + this.centerY() + '), периметр: ' + (_diagonal/Math.sqrt(2))*4 + ', площадь: ' + (_diagonal/Math.sqrt(2))*(_diagonal/Math.sqrt(2)));
	}
}

var mySquare = new Square(-1,1,9);

mySquare.info();
console.log(mySquare.diagonal());
console.log(mySquare.centerX());
console.log(mySquare.centerY());
/* ?????????????????????????????????????????????????????????? */
/* CПРОСИТЬ ПРО this.centerX() В ИНФО, ПОЧЕМУ НЕ this._centerX */
/* ?????????????????????????????????????????????????????????? */

function Circle(centerX, centerY, radius){
	GeometricFigure.call(this, centerX, centerY);
	var _radius;

	function validationR(radius){
		if (typeof(radius) === 'number' && radius >= 0){
			_radius = radius;
		}
	}
	validationR(radius);

	this.radius = function(radius){
		if (radius === undefined) {
			return _radius;
		}else {
			validationR(radius);
		}
	};

	this.info = function(){
		console.log('Информация по кругу: координаты (' + this.centerX() + ',' + this.centerY() + '), периметр: ' + 2*Math.PI*_radius + ', площадь: ' + Math.PI*_radius*_radius);
	}
}
var myCircle = new Circle(5,5,15);
myCircle.info();
console.log(myCircle.radius());
console.log(myCircle.centerX());
console.log(myCircle.centerY());

/*  exercise 2 */
/*
Напишите конструктор объектов Квадрат, определите защищенное свойство для хранения значения стороны. Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, который возвращает периметр.
На основе этого конструктора создайте конструктор Куб и переопределите метод получения периметра.
Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
1. Без расширения (полностью переопределить метод родителя);
2. С расширением (использовать результат метода родителя для дальнейших расчетов).
*/
console.log('-- exercise 2 --');

function Square2(a){

	var _a;

	function validationA(a){
		if (typeof(a) === 'number' && a >= 0){
			_a = a;
		}
	}
	validationA(a);

	this.a = function(a){
		if (a === undefined) {
			return _a;
		}else {
			validationA(a);
		}
	};

	this.info = function(){
		return 4*_a;
	}
}

function Cube(a){
	Square2.call(this, a);
	this.info = function(){
		console.log( 'Периметр куба: ' + 12*this.a() );
	}
}

var myCube = new Cube(10);
myCube.info();

function Cube2(a){
	Square2.call(this, a);
	var parentInfo = this.info;
	this.info = function(){
		console.log( 'Периметр куба: ' + 3*parentInfo() );
	}
}

var myCube2 = new Cube2(10);
myCube2.info();


/*  exercise 3 */
/*
Задание №3. Прототипы. Типы объектов на прототипах
Создайте тип объектов MP3 при помощи прототипов.
*/
console.log('-- exercise 3 --');

function Mp3Player(name, vol) {
	this._name = name;
	this._amount = 16;
	this._volume = vol;
	this._minVolume = 0;
	this._maxVolume = 100;
	this._track = 1;
	this._stop = false;
	this._pause = false;
	this._play = false;
}

Mp3Player.prototype.nextTrack = function () {
	return ++this._track;
};
Mp3Player.prototype.prevTrack = function(){
	return --this._track;
};
Mp3Player.prototype.stopButton = function(){
	return !this._top;
};
Mp3Player.prototype.pauseButton = function(){
	return !this._pause;
};
Mp3Player.prototype.playButton = function(){
	return !this._play;
};
Mp3Player.prototype.volPlus = function(){
	if(this._volume < this._maxVolume){
		return ++this._volume;
	}else{
		return this._volume = 100;
	}
};
Mp3Player.prototype.volMinus = function(){
	if(this._volume > this._minVolume){
		return --this._volume;
	}else{
		return this._volume = 0;
	}
};

var iPod = new Mp3Player('iPod', 75);

console.dir(iPod);


/*  exercise 4 */
/*
Задание №4. Прототипное наследование
В Задание №1. Функциональное наследование измените наследование на прототипное.
*/
console.log('-- exercise 4 --');

function GeometricFigure4(centerX, centerY){
	this._centerX = centerX,
	this._centerY = centerY;
}

GeometricFigure4.prototype.centerX = function(centerX){
	if (centerX === undefined) {
		return this._centerX;
	}else {
		if (typeof(centerX) === 'number'){
			this._centerX = centerX; /* ???????? CПРОСИТЬ, ВАЛИДАЦИЮ ПРЯМО СЮДА? ?????????? */
		}
	}
};
GeometricFigure4.prototype.centerY = function(centerY){
	if (centerY === undefined) {
		return this._centerY;
	}else {
		if (typeof(centerY) === 'number'){
			this._centerY = centerY; /* ???????? CПРОСИТЬ, ВАЛИДАЦИЮ ПРЯМО СЮДА? ?????????? */
		}
	}
};

function Square4(centerX, centerY, diagonal){
	GeometricFigure4.call(this, centerX, centerY);
	this._diagonal = diagonal;
}

Square4.prototype = Object.create(GeometricFigure4.prototype);
Square4.prototype.constructor = Square4;

Square4.prototype.diagonal = function(diagonal){
	if (diagonal === undefined) {
		return this._diagonal;
	}else {
		if (typeof(diagonal) === 'number' && diagonal >= 0){
			this._diagonal = diagonal; /* ???????? CПРОСИТЬ, ВАЛИДАЦИЮ ПРЯМО СЮДА? ?????????? */
		}
	}
};

Square4.prototype.info = function(){
	return 'Информация по квадрату: координаты (' + this._centerX + ',' + this._centerY + '), периметр: ' + (this._diagonal/Math.sqrt(2))*4 + ', площадь: ' + (this._diagonal/Math.sqrt(2))*(this._diagonal/Math.sqrt(2));
}

var mySquare4 = new Square4(-1,1,9);
console.log(mySquare4.info());
console.log(mySquare4.diagonal());
console.log(mySquare4.centerX());
console.log(mySquare4.centerY());


function Circle4(centerX, centerY, radius){
	GeometricFigure4.call(this, centerX, centerY);
	this._radius = radius;
}

Circle4.prototype = Object.create(GeometricFigure4.prototype);
Circle4.prototype.constructor = Circle4;

Circle4.prototype.radius = function(radius){
	if (radius === undefined) {
		return this._radius;
	}else {
		if (typeof(radius) === 'number' && radius >= 0){
			this._radius = radius;  /* ???????? CПРОСИТЬ, ВАЛИДАЦИЮ ПРЯМО СЮДА? ?????????? */
		}
	}
};
Circle4.prototype.info = function(){
	return 'Информация по кругу: координаты (' + this._centerX + ',' + this._centerY + '), периметр: ' + 2*Math.PI*this._radius + ', площадь: ' + Math.PI*this._radius*this._radius;
}


var myCircle4 = new Circle4(5,5,15);
console.log(myCircle4.info());
console.log(myCircle4.radius());
console.log(myCircle4.centerX());
console.log(myCircle4.centerY());


/*  exercise 5 */
/*
Задание №5. Прототипное наследование. Полиморфизм
В Задание №2. Функциональное наследование. Полиморфизм измените наследование на прототипное.
*/
console.log('-- exercise 5 --');

function Square5(a){
	this._a = a;
}

Square5.prototype.a = function(a){
	if (a === undefined) {
		return this._a;
	}else {
		if (typeof(a) === 'number' && a >= 0){
			this._a = a;
		}
	}
};
Square5.prototype.info = function(){
	return 4*this._a;
}

/* 1 */
function Cube51(a){
	Square5.call(this, a);
}
Cube51.prototype.info = function(){
	return 'Периметр куба: ' + 12 * this._a;
};

var myCube51 = new Cube51(10);
console.log(myCube51.info());

/* 2 */
function Cube52(a){
	Square5.call(this, a);
}
Cube52.prototype.info = function(){
	return 'Периметр куба: ' + 3 * Square5.prototype.info.call(this);
}

var myCube52 = new Cube52(10);
console.log(myCube52.info());