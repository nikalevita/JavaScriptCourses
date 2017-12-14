"use strict";
/*  exercise 1 */
console.log('-- exercise 1 --');
/*
	Задание №1. Деструктуризация
	Есть следующий код:
	let arr = ["Tom", "Sam", "Ray", "Bob"];
	let [ Ваш код ] = arr;
	console.log(x); // "Tom"
	console.log(y); // "Sam"
	console.log(z); // [Bob]
	Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.
*/
{
	let arr = ["Tom", "Sam", "Ray", "Bob"];
	let [ x, y, , ...z ] = arr;
	console.log(x); // "Tom"
	console.log(y); // "Sam"
	console.log(z); // [Bob]
}

/*  exercise 2 */
console.log('-- exercise 2 --');
/*
	Задание №2. Деструктуризация
	Есть следующий код:
	let names = {
	   first: "Tom",
	   second: "Sam",
	   third: "Ray", 
	   fourth: "Bob"
	};
	let { Ваш код } = names;
	console.log(f); // "Tom"
	console.log(x); // "Ray"
	console.log(fifth); // "Name №5"
	Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.
*/
{
	let names = {
	   first: "Tom",
	   second: "Sam",
	   third: "Ray", 
	   fourth: "Bob"
	};
	let { first: f, third: x, fifth = "Name #5" } = names;
	console.log(f); // "Tom"
	console.log(x); // "Ray"
	console.log(fifth); // "Name №5"
}

/*  exercise 3 */
console.log('-- exercise 3 --');
/*
	Есть следующий код:
	let data = {
		names: ["Sam", "Tom", "Ray", "Bob"],
		ages: [20, 24, 22, 26],
	};
	let  Ваш код  = data;
	console.log(name2); // "Tom"
	console.log(age2); // 24
	console.log(name4); // "Bob"
	console.log(age4); // 26
	Допишите код используя деструктуризацию, чтобы в консоли браузера появились строки, которые написаны в комментариях.
*/
{
	let data = {
		names: ["Sam", "Tom", "Ray", "Bob"],
		ages: [20, 24, 22, 26],
	};

	let  { names: [ , name2, , name4], ages: [, age2, , age4] }  = data;

	console.log(name2); // "Tom"
	console.log(age2); // 24
	console.log(name4); // "Bob"
	console.log(age4); // 26
}

/*  exercise 4 */
console.log('-- exercise 4 --');
/*
	Задание №4. Функции
	Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
	Если параметры типа Number отсутствуют, возвращает число 0.
	function mul() {
	   // Ваш код
	}
	console.log(mul(1, "str", 2, 3, true)); // 6
	console.log(mul(null, "str", false, true)); // 0
	Нельзя использовать свойство arguments, но в функцию mul() можно добавить один параметр.
*/
{
	function mul(...rest) {
		let result = 1,
			flag = false;
		for(let i = 0; i < rest.length; i++){
			if(typeof(rest[i]) === "number"){
				result *= rest[i];
				flag = true;
			}
		}
		if(!flag){
			result = 0;
		}
		return result;
	}
	console.log(mul(1, "str", 2, 3, true)); // 6
	console.log(mul(null, "str", false, true)); // 0
}

/*  exercise 5 */
console.log('-- exercise 5 --');
/*
	Задание №5. Функции
	Есть следующий код:
	let obj = {
	   name: "obj",
	   print: function () {
	      // Ваш код
	   }
	};
	function multiCaller(func, count) {
	   for (let i = 0; i < count; i++) {
	      func();
	   }
	}
	multiCaller(obj.print(), 3);  // "obj", 3 раза
	Допишите код используя стрелочные функции, чтобы в консоли браузера появились строки, которые написаны в комментариях.
*/
{
	let obj = {
	   name: "obj",
	   print: function () {
	      let a = () => console.log(this.name);
	      return a;
	   }
	};

	function multiCaller(func, count) {
	   for (let i = 0; i < count; i++) {
	      func();
	   }
	}
	multiCaller(obj.print(), 3);  // "obj", 3 раза
}


/*  exercise 6 */
console.log('-- exercise 6 --');
/*
	Задание №6. Функции
	Есть следующий код:
	let server = {
	   data: 0,
	   convertToString: function (callback) {
	      callback((function () {
	         return this.data + "";
	      }).bind(this));
	   }
	};
	let client = {
	   server: server,
	   result: "",
	   calc: function (data) {
	      this.server.data = data;
	      this.server.convertToString(this.notification());
	   },
	   notification: function () {
	      return (function (callback) {
	         this.result = callback();
	      }).bind(this);
	   }
	};
	client.calc(123);
	console.log(client.result); // "123"
	console.log(typeof client.result); // "string"
	Измените код используя стрелочные функции, чтобы в коде не использовались методы bind().

*/
{
	let server = {
		data: 0,
		convertToString: function (callback) {
			callback(() => this.data + "");
		}
	};

	let client = {
		server: server,
		result: "",
		calc: function (data) {
			this.server.data = data;
			this.server.convertToString(this.notification());
		},
		notification: function () {
			return (callback) => this.result = callback();
		}
	};

	client.calc(123);
	console.log(client.result); // "123"
	console.log(typeof client.result); // "string"
}


/*  exercise 7 */
console.log('-- exercise 7 --');
/*
	Задание №7. Строки
	Есть следующий код:
	let names = {
	   first: "Tom",
	   second: "Sam",
	   third: "Ray"
	};
	console.log( Ваш код ); // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"
	Допишите код используя интерполяцию, чтобы в консоли браузера появилась строка, которая написана в комментариях.
*/
{
	let names = {
	   first: "Tom",
	   second: "Sam",
	   third: "Ray"
	};
	console.log( `Первый -${names.first}-, Второй - "${names.second}", Третий => '${names.third}'` ); // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"
}



/*  exercise 8 */
console.log('-- exercise 7 --');
/*
	Задание №8. Строки
	Напишите функцию шаблонизации format(), которая выводит строку в обратном порядке.
	Примеры использования функции format():
	function format(s, ...v) {
	   // Ваш код
	}
	let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
	console.log(res1);
	let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
	console.log(res2);
	let res3 = format`left${"<->"}right`; // "right<->left"
	console.log(res3);
*/

{
	function format(s, ...v) {
		let res = s[s.length-1];
		for(let i = v.length-1; i >= 0; i--){
			res += v[i] + s[i];
		}
		return res;
	}
	let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
	console.log(res1);
	let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
	console.log(res2);
	let res3 = format`left${"<->"}right`; // "right<->left"
	console.log(res3);
}