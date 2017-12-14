/*  exercise 1 */
console.log('-- exercise 1 --');

var add = function (x, y) {
   return x + y;
}

console.log(add(10,11));

/*  exercise 2 */
console.log('-- exercise 2 --');

function createArrayIterator(array) {
	var i = 0;
	function counterIt(){
		return array[i++];
	}
	return counterIt;
}

var arr = [5, 6, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 6
console.log(itr()); // 7
console.log(itr()); // undefined
console.log(itr()); // undefined

var arr1 = [12, 23, 34];
var itr1 = createArrayIterator(arr1);
console.log(itr1());
console.log(itr1());
console.log(itr1());
console.log(itr1());

/*  exercise 3 */
console.log('-- exercise 3 --');

function rectangleInfo(){
	var arr = [],
		safeA = 0,
		safeB = 0;
	arr[0] = function(a,b){
		if ((typeof(a) == 'number') && (typeof(b) == 'number') && (a > 0) && (b > 0)) {
			safeA = a;
			safeB = b;
		}
	};
	arr[1] = function(){
		return 'Периметр: ' + (safeA + safeB) * 2 + ' Площадь: ' + safeA * safeB; 
	};
	return arr;
}

var rectangleInfo = rectangleInfo();
rectangleInfo[0]('5',5);
console.log(rectangleInfo[1]());

rectangleInfo[0](10,5);
console.log(rectangleInfo[1]());

/*  exercise 4 */
console.log('-- exercise 4.0 loop --');

function digitSumLoop(k){
	var summ = 0;
	var myArr = [];
	var i = 0;
	while(k >= 1){
		res = k%10;
		myArr[i] = res;
		k = (k - k%10) / 10;
		i++;
	}
	for(var j = 0; j < myArr.length; j++){
		summ += myArr[j];
	}
	return summ;
}
console.log(digitSumLoop(421213));

console.log('-- exercise 4.1 function --');

function digitSum(k){
	if(k < 1){
		return 0;
	} else{
		return k%10 + digitSum((k - k%10) / 10);
	}
}

console.log(digitSum(11210));

/*  exercise 5 */
console.log('-- exercise 5 --');

function format(data, type) {
    switch (type){
		case 'number':
			format = function(){
				return Number(data);
			}
			break;
		case 'string':
			format = function(){
				return String(data);
			}
			break;
		case 'boolean':
			format = function(){
				return Boolean(data);
			}
			break;
	}
}

var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"