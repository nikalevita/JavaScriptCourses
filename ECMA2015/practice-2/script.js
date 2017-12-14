"use strict";
/*  exercise 1 */
console.log('-- exercise 1 --');
/*
	Задание №1. Объекты
	1. Создайте новый объект tv;
	2. Добавьте свойство currentChannel со значением 1;
	3. Добавьте метод nextChannel(), который увеличивает currentChannel на единицу;
	4. Добавьте метод previousChannel(), который уменьшает currentChannel на единицу;
	5. Добавьте метод setChannel(number), который переходит на канал по номеру.
*/
{
	let tv = {
		currentChannel: 1,
		nextChannel(){
			this.currentChannel++;
		},
		previousChannel(){
			this.currentChannel--;
		},
		setChannel(num){
			if(typeof(num) === "number" && num <= 100 && num >= 0){
				this.currentChannel = num;
			}
		}
	}
	tv.setChannel(50);
	console.log(tv.currentChannel);
}

/*  exercise 2 */
console.log('-- exercise 2 --');
/*
	Задание №2. Объекты
	Создайте объект, который описывает MP3 плеер.
*/

let mp3Player = {
	name: 'iPod',
	volume: 50,
	minVolume: 0,
	maxVolume: 100,
	trackNum: 0,
	stop: false,
	play: false,
	nextTrack(){
		this.trackNum++;
	},
	prevTrack(){
		this.trackNum--;
	},
	stopButton(){
		!this.stop;
	},
	pauseButton(){
		!this.play;
	},
	playButton(){
		!this.play;
	},
	volPlus(){
		if(this.volume < this.maxVolume){
			this.volume++;
		}
	},
	volMinus(){
		if(this.volume > this.minVolume){
			this.volume--;
		}
	},
};
mp3Player.volPlus();
console.log(mp3Player);

/*  exercise 3 */
console.log('-- exercise 3 --');
/*
	Задание №3. Классы
	Напишите классы для объектов из Задание №1. Объекты и Задание №2. Объекты.
*/

{
	class Tv {
		constructor(name) {
			this._name = name,
			this._currentChannel = 0;
		}
		nextChannel(){
			if(this._currentChannel < 1000){
				this._currentChannel++;
			}
		}
		previousChannel(){
			if(this._currentChannel > 0){
				this._currentChannel--;
			}
		}
		setChannel(num){
			if(typeof(num) === "number" && num <= 1000 && num >= 0){
				this._currentChannel = num;
			}
		}
	}

	let myTv = new Tv('myTv');
	myTv.setChannel(100);
	console.log(myTv);
}

{
	class mp3Player {
		constructor(name) {
			this._name = name,
			this._volume = 50,
			this._minVolume = 0,
			this._maxVolume = 100,
			this._trackNum = 0,
			this._stop = false,
			this._play = false;
		}
		nextTrack(){
			this._trackNum++;
		}
		prevTrack(){
			this._trackNum--;
		}
		stopButton(){
			this._stop = !this._stop;
		}
		pauseButton(){
			this._play = !this._play;
		}
		playButton(){
			this._play = !this._play;
		}
		volPlus(){
			if(this._volume < this._maxVolume){
				this._volume++;
			}
		}
		volMinus(){
			if(this._volume > this._minVolume){
				this._volume--;
			}
		}
	}

	let myMp3Player = new mp3Player('myMp3Player');
	myMp3Player.playButton();
	console.log(myMp3Player);
}

/*  exercise 4 */
console.log('-- exercise 4 --');
/*
	Задание №4. Классы
	Напишите класс Геометрическая фигура, определите в нем приватные свойства для задания центра фигуры. Для доступа к этим свойствам определите необходимые метод/методы.
	На основе этого класса создайте два новых (наследники) – Прямоугольник и Круг. В этих классах определите особые приватные свойства. (Например, длина диагонали для Квадрата и радиус для Круга). В каждый из классов добавьте публичный метод info(), который выводит на экран всю доступную информацию о фигуре.
*/

{
	class Figure{
		constructor(x, y){
			this._x = x,
			this._y = y;
		}
		getX(){
			return this._x;
		}
		setX(x){
			if(typeof(x) === "number"){
				this._x = x;
			}
		}
		getY(){
			return this._y;
		}
		setY(y){
			if(typeof(y) === "number"){
				this._y = y;
			}
		}
		info(){
			console.log(`X: ${this._x}, Y: ${this._y}`);
		}
	}

	class Rectangle extends Figure{
		constructor(x, y, diagonal){
			super(x, y),
			this._diagonal = diagonal;
		}
		info(){
			console.log(`Rectangle. X: ${this._x}, Y: ${this._y}, Diagonal: ${this._diagonal}.`);
		}
	}

	class Circle extends Figure{
		constructor(x, y, radius){
			super(x, y),
			this._radius = radius;
		}
		info(){
			console.log(`Circle. X: ${this._x}, Y: ${this._y}, Radius: ${this._radius}.`);
		}
	}


	let r = new Rectangle(10,15,50);
	r.setX(32);
	r.info();

	let c = new Circle(10,15,60);
	c.setX(12);
	c.info();
}

/*  exercise 5 */
console.log('-- exercise 5 --');
/*
	Задание №5. Классы
	Напишите класс Квадрат, определите защищенное свойство для хранения значения стороны. Для доступа к этому свойству определите необходимые метод/методы. Также определите публичный метод, который возвращает периметр.
	На основе этого класса создайте класс Куб и переопределите метод получения периметра.
	Реализуйте 2 версии текущего задания, используя следующие способы переопределения:
	1. Без расширения (полностью переопределить метод родителя);
	2. С расширением (использовать результат метода родителя для дальнейших расчетов).
*/

{
	class Square{
		constructor(a){
			this._a = a;
		}
		getA(){
			return this._a;
		}
		setA(a){
			if(typeof(a) === "number" && a > 0){
				this._a = a;
			}
		}
		perimetr(){
			return this._a*4;
		}
	}

	class Cube extends Square{
		constructor(a){
			super(a);
		}
		perimetr(){
			return `Периметр (без расширения): ${this._a*12}`;
		}
		perimetr2(){
			return `Периметр (с расширением): ${super.perimetr()*3}`;
		}
	}

	let cube = new Cube(10);
	console.log(cube.perimetr());
	console.log(cube.perimetr2());
	console.log(cube);

}

/*  exercise 6 */
console.log('-- exercise 6 --');
/*
	Задание №6. Классы
	Напишите класс Круг и реализуйте следующий функционал:
	1. Определите конструктор, который запрашивает координаты центра круга, его радиус и инициализирует объект;                   --?????????????????????????????инициализирует объект????????????????????????????????--
	2. Определите метод получения длины окружности для текущего объекта (L = 2 * π * R);
	3. Определите статический метод, который принимает радиус и возвращает длину окружности для заданного радиуса (L = 2 * π * R);
	4. Определите метод получения объекта-круга, который возвращает копию текущего объекта;
	5. Определите статический метод, который принимает координаты центра круг, его радиус и возвращает объект круга с заданными параметрами;
	6. Определите метод проверки попадания точки в круг;
	7. Определите метод преобразования текущего состояния объекта в символьную строку (toString()).
*/

{
	class Circle{
		constructor(x, y, r){
			this._x = x,
			this._y = y;
			this._radius = r;
		}
		length(){
			return 2 * Math.PI * this._radius;
		}
		static lengthWithRadius(r){
			return 2 * Math.PI * r;
		}
		returnCopy(){
			return new Circle(this._x, this._y, this._radius);
		}
		static createCircle(x, y, r){
			return new Circle(x, y, r);
		}
		inCircle(x, y){
			if(x <= (this._x + this._radius) && x >= (this._x - this._radius) && y <= (this._y + this._radius) && y >= (this._y - this._radius)){
				return true;
			}else{
				return false;
			}
		}
		toString(){
			return `${this._x}, ${this._y}, ${this._radius}`;
		}
	}


	let circle = new Circle(0, 0, 10);

	/* 1 */
	console.dir(circle);

	/* 2 */
	console.log(circle.length());

	/* 3 */
	console.log(Circle.lengthWithRadius(100));

	/* 4 */
	let circleCopy = circle.returnCopy();
	console.log(circleCopy);

	/* 5 */
	console.log(Circle.createCircle(10, 10, 5));

	/* 6 */
	console.log(circle.inCircle(10, 10)); // true
	console.log(circle.inCircle(10, 20)); // false

	/* 7 */
	console.log(circle.toString());

}