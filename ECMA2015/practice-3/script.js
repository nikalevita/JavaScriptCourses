"use strict";
/*  exercise 1 */
console.log('-- exercise 1 --');
/*
	Задание №1. Symbol
	Создайте символ в глобальном реестре с ключом isEmpty.
	В Object.prototype добавьте метод, с именем ранее созданного символа. Данный метод должен возвращать false если в объекте есть хотя бы одно перечисляемое свойство, в противном случае возвращает true.
	Примеры использования метода:
	let emptyObj = {

	};
	console.log(emptyObj[Symbol.for("isEmpty")]()); // true
	let user = {
	   name: "Tom"
	};
	console.log(user[Symbol.for("isEmpty")]()); // false
*/
{

	let isEmpty = Symbol.for("isEmpty");

	Object.prototype[isEmpty] = function() {
	    for (let key in this) {
	        return false;
	    }
	    return true;
	};

	let emptyObj = {

	};
	console.log(emptyObj[Symbol.for("isEmpty")]()); // true
	let user = {
	   name: "Tom"
	};
	console.log(user[Symbol.for("isEmpty")]()); // false
}


/*  exercise 2 */
console.log('-- exercise 2 --');
/*
	Задание №2. Итераторы
	Напишите итератор для объекта pairwiseConcatination, у которого есть два свойства. Каждое свойство является массивом.
	Итератор должен возвращать пары значений (массив из двух элементов). Пары формируются следующим образом, первая пара должна состоять из первых значений свойств объекта pairwiseConcatination, вторая пара из вторых значений и т.д.
	Если в свойствах объекта pairwiseConcatination массивы разной длины, то количество пар должно быть равное длине меньшего массива.
	let pairwiseConcatination = {
	   firstArray: [],
	   secondArray: [],
	   [Symbol.iterator]() {
	      // Ваш код
	   }
	}
	pairwiseConcatination.firstArray = ["Tom", "Sam", "Ray"];
	pairwiseConcatination.secondArray = [22, 26, 24, 20];
	for (let pair of pairwiseConcatination) {
	   console.log(pair);
	}
	Результат:
	["Tom", 22]
	["Sam", 26]
	["Ray", 24]
*/
{
	let pairwiseConcatination = {
	   firstArray: [],
	   secondArray: [],
	   [Symbol.iterator]() {
			let end;
			let count = 0;
	    	if(this.firstArray.length <= this.secondArray.length){
	    		end = this.secondArray.length - 1;
	    	}else{
	    		end = this.firstArray.length - 1;
	    	}
			return {
				next: () => {
					if (count < end) {
						return {
							done: false,
							value: [this.firstArray[count], this.secondArray[count++]]
						}
					} else {
						return {
							done: true
						}
					}
				}
			}
	    }
	}
	pairwiseConcatination.firstArray = ["Tom", "Sam", "Ray"];
	pairwiseConcatination.secondArray = [22, 26, 24, 20];
	for (let pair of pairwiseConcatination) {
		console.log(pair);
	}
}

/*  exercise 3 */
console.log('-- exercise 3 --');
/*
	Задание №3. Коллекции
	Напишите функцию mapBuilder(keysArray, valuesArrays), которая принимает два массива одинаковой длины. Используя эти массивы, функция должна создавать объект типа Map, ключами которого являются значения из первого массива, а значениями Map – значения из второго массива. После этого функция возвращает данный объект Map.
	Примеры использования функции:
	let keys = [1, 2, 3, 4];
	let values = ["div", "span", "b", "i"];
	let map = mapBuilder(keys, values);
	console.log(map.size); // 4
	console.log(map.get(2)); // "span"
*/
{

	function mapBuilder(keysArray, valuesArrays){
		let map = new Map();
		for(let i = 0; i < keysArray.length; i++){
			map.set(keysArray[i], valuesArrays[i]);
		}
		return map;
	}

	let keys = [1, 2, 3, 4];
	let values = ["div", "span", "b", "i"];
	let map = mapBuilder(keys, values);
	console.log(map.size); // 4
	console.log(map.get(2)); // "span"
}

/*  exercise 4 */
console.log('-- exercise 4 --');
/*
	Задание №4. Коллекции
	Напишите функцию sortDistinct(array), которая принимает массив чисел и возвращает новый отсортированный по возрастанию массив, в котором отсутствуют дубликаты.
	Примеры использования функции:
	let arr1 = sortDistinct([3, 1, 1, 2, 3, 1, 2]);
	console.log(arr1); // [1, 2, 3]
	let arr2 = sortDistinct([1, 1, 1, 1,]);
	console.log(arr2); // [1]
*/
{
	function sortDistinct(array){
		let set = new Set();
		for(let i = 0; i < array.length; i++){
			set.add(array[i]);
		}
		return [...set].sort();
	}

	let arr1 = sortDistinct([3, 1, 1, 2, 3, 1, 2]);
	console.log(arr1); // [1, 2, 3]
	let arr2 = sortDistinct([1, 1, 1, 1,]);
	console.log(arr2); // [1]
}