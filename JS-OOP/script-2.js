"use strict";
/*  exercise 1 */
console.log('-- exercise 1 --');
var calculator = {
	read: function(){
		//this.a = prompt('Число раз:','');
		//this.b = prompt('Число два:','');
	},
	sum: function(){
		return Number(this.a) + Number(this.b);
	},
	mul: function(){
		return this.a * this.b;
	}
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

/*  exercise 2 */
console.log('-- exercise 2 --');
function createPlayer(name, amount, display){
	return {
		name: name,
		amount: amount,
		display: display
	};
}

var iPod = createPlayer('iPod', 64, true);
for (var key in iPod){
	console.log(key + ': ' + iPod[key]);
}

/*  exercise 3 */
console.log('-- exercise 3 --');
function maxSalary(sal){
	var maxSal = 0;
	for (var key in sal){
		if (maxSal < sal[key]){
			maxSal = sal[key];
		}
	}
	return maxSal;
}

var salaries = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50
};
console.log(maxSalary(salaries));

/*  exercise 4 */
console.log('-- exercise 4 --');

function Plaeyr(name, amount, display){
	this.name = name;
	this.amount = amount;
	this.display = display;
	this.displayInfo = function () {
		for (var key in this){
			if(typeof(this[key]) != 'function'){
				console.log(key + ': ' + this[key]);
			}
		}
	};
}
var iPod2 = new Plaeyr("iPod2", 64, true);
iPod2.displayInfo();

/*  exercise 5 */
/*
Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
*/
console.log('-- exercise 5 --');

function mul() {
    var res = 1,
    	flag = false;
    for(var i = 0; i < arguments.length; i++){
    	if(typeof arguments[i] === 'number'){
    		res *= arguments[i];
    		flag = true;
    	}
    }
    if(!flag){
    	res = 0
    }
	return res;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

/*  exercise 6 */
console.log('-- exercise 6 --');

var country = {
   name: "Украина",
   language: "украинский",
   capital: {
      name: "Киев",
      population: 2907817,
      area: 847.66
   }
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // "<Украина>"
format.apply(country, ['[', ']']); // "[Украина]"
format.call(country.capital, '"', '"'); // ""Киев""
format.apply(country.capital, ['', '']); // "Киев"
