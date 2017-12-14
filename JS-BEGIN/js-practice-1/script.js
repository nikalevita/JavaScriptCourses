/*  exercise 1 */
console.log('-- exercise 1 --');
function ex1(x){
	if (x > 0) {
		x += 1;
	} else if (x < 0){
		x -= 2;
	} else {
		x = 10;
	}
	return x;
}

console.log(ex1(0));

/*  exercise 2 */
console.log('-- exercise 2 --');
function ex2(x){
	var message1;
	var message2;
	// определяем четность
	if (x%2 == 0){
		message2 = ' четное';
	}else{
		message2 = ' нечетное';
	}
	// определяем знак числа
	if (x == 0) {
		message1 = ' нулевое';
		message2 = '';
	} else if (x > 0){
		message1 = ' положительное';
	} else {
		message1 = ' отрицательное';
	}

	var message = x + message1 + message2 + ' число';

	return message;
}

console.log(ex2(-10));

/*  exercise 3 */
console.log('-- exercise 3 --');
function ex3(a,b,c,d){
	var number;
	if (a == b){
		switch(a){
			case c:
				number = '4';
				break;
			case d:
				number = '3';
				break;
		}
	}else if(b == c){
		number = '1';
	}else{
		number = '2';
	}
	number += 'e число отличное от остальных';
	return number;
}

console.log(ex3(2,2,2,3));

/*  exercise 4 */
console.log('-- exercise 4 --');
function ex4(k){
	var message;
	switch(k){
		case 1:
			message = 'плохо';
			break;
		case 2:
			message = 'неудовлетворительно';
			break;
		case 3:
			message = 'удовлетворительно';
			break;
		case 4:
			message = 'хорошо';
			break;
		case 5:
			message = 'отлично';
			break;
		default:
			message = 'Error';
			break;
	}
	return message;
}

console.log(ex4(5));

/*  exercise 5 */
console.log('-- exercise 5 --');
function ex5(a,b){
	while(a >= 0){
		a -= b;
	}
	var res = "Остаток " + (a + b);
	return res;
}

console.log(ex5(10,4));

/*  exercise 6 */
console.log('-- exercise 6 --');
function ex6(a){
	var res = 'Итог: ';
	while(a >= 1){
		res += a%10 + ' ';
		a = (a - a%10)/10;
	}
	return res;
}

console.log(ex6(123456789052));

/*  exercise 7 */
console.log('-- exercise 7 --');
function ex7(a,b){
	var summ = 0;
	for (var i = a; i <= b; i++){
		summ += i;
	}
	return summ;
}

console.log(ex7(1,3));

/*  exercise 8 */
console.log('-- exercise 8 --');
function ex8(n){
	var res = 1;
	for (var i = 1; i <= n; i++){
		res *= i;
	}
	return res;
}

console.log(ex8(10));

/*  exercise 9 */
console.log('-- exercise 9 (раскомментировать строку вызова) --');
function ex9(){
	var myArr = [];
	var i = 0;
	var j = true;
	var tempItem;
	var summ = 0;

	while(j == true){
		tempItem = prompt('Значение:','');
		if( tempItem == null || tempItem == '' || isNaN(Number(tempItem)) ) {
			j = false;
		}else{
			myArr[i] = Number(tempItem);
			i++;
		}
	}

	for(var k = 0; k < myArr.length; k++){
		summ += myArr[k];
	}
	return 'Сумма всех чисел: ' + summ;
}

//console.log(ex9());

/*  exercise 10 */
console.log('-- exercise 10 --');
function ex10(a,b){
	var amount = b - a + 1;
	var res = String(a) + " ";
	for(var i = 1; i < amount; i++){
		var j = 0;
		while(j <= i){
			res += a + i + " ";
			j++;
		}
	}
	return res;
}

console.log(ex10(2,7));

/*  exercise 11 */
console.log('-- exercise 11 --');
function pow(x, n){
	var res = x;
	if(n > 0){
		for(var i = 1; i < n; i++){
			res *= x;
		}
	}
	return res;
}

console.log(pow(2,1));

/*  exercise 12 */
console.log('-- exercise 12 --');
function minMax(x, y){
	var min;
	if(x > y){
		min = y;
	}else{
		min = x;
	}
	return min;
}

console.log(minMax(22,11));

/*  exercise 13 */
console.log('-- exercise 13 --');
function sign(x){
	var res;
	if(x > 0){
		res = 1;
	}else if(x == 0){
		res = 0;
	}else{
		res = -1;
	}
	return res;
}

console.log(sign(-100));

/*  exercise 14 */
console.log('-- exercise 14 --');
function calc(a, b, op){
	var res;
	switch(op){
		case 1:
			res = a - b;
			break;
		case 2:
			res = a * b;
			break;
		case 3:
			res = a / b;
			break;
		default:
			res = a + b;
			break;
	}
	return res;
}

console.log(calc(4, 6, 3));

/*  exercise 15 */
console.log('-- exercise 15 --');
function digitN(k, n){
	var res;
	var myArr = [];
	var i = 0;
	while(k >= 1){
		res = k%10;
		myArr[i] = res;
		k = (k - k%10)/10;
		i++;
	}
	if(myArr.length < n ){
		res = -1;
	}else{
		res = myArr[n-1];
	}
	//return myArr;
	return res;
}

console.log(digitN(1234567895611, 3));
