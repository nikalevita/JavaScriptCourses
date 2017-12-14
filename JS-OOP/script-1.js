/*  exercise 1 */
console.log('-- exercise 1 --');
var user = {
	name: 'Cris',
	surname: 'Simons',
};
user.name = 'Brain';
delete user.name;
console.log(user);

/*  exercise 2 */
console.log('-- exercise 2 --');
/*var car = {};
car.model = "audi";
car.speed = 200;
car.run = function(){
	console.log(car.model + ' едет со скоростью ' + car.speed);
};
car.stop = function(){
	console.log(car.model + ' model остановилась');
};
*/
var car = {};
car['model'] = "audi",
car['speed'] = 200,
car['run'] = function(){
	console.log(car.model + ' едет со скоростью ' + car.speed);
},
car['stop'] = function(){
	console.log(car.model + ' model остановилась');
}
/*
var car = {
	model: "audi",
	speed: 200,
	run: function(){
		console.log(car.model + ' едет со скоростью ' + car.speed);
	},
	stop: function(){
		console.log(car.model + ' model остановилась');
	}
};*/

console.log(car);
car['stop']();

/*  exercise 3 */
console.log('-- exercise 3 --');
var tv = {
	currentChannel: 1, 
	nextChannel: function(){
		return ++tv.currentChannel;
	},
	previousChannel: function(){
		return --tv.currentChannel;
	},
	setChannel: function(number){
		return tv.currentChannel = number;
	} 
};

console.log(tv.nextChannel());
console.log(tv.nextChannel());
console.log(tv.nextChannel());

console.log(tv.previousChannel());
console.log(tv.setChannel(5));

/*  exercise 4 */
console.log('-- exercise 4 --');

var mp3Player = {
	name: 'iPod',
	amount: 16,
	volume: 50,
	minVolume: 0,
	maxVolume: 100,
	track: 1,
	stop: false,
	pause: false,
	play: false,
	nextTrack: function(){
		return ++mp3Player.track;
	},
	prevTrack: function(){
		return --mp3Player.track;
	},
	stopButton: function(){
		return !mp3Player.stop;
	},
	pauseButton: function(){
		return !mp3Player.pause;
	},
	playButton: function(){
		return !mp3Player.play;
	},
	volPlus: function(){
		if(mp3Player.volume < mp3Player.maxVolume){
			return ++mp3Player.volume;
		}else{
			return mp3Player.volume = 100;
		}
	},
	volMinus: function(){
		if(mp3Player.volume > mp3Player.minVolume){
			return ++mp3Player.volume;
		}else{
			return mp3Player.volume = 0;
		}
	},
};

console.log(mp3Player);

/* exercise 5 */
console.log('-- exercise 5 --');

var employees = {
	employee: [
		{
			name: 'John',
			age: 28,
			experience: 1,
			languages: ["Java", "JavaScript", "SQL"]
		},
		{
			name: 'Bill',
			age: 30,
			experience: 5,
			languages: ["HTML", "CSS",  "JavaScript"]
		},
		{
			name: 'Mike',
			age: 32,
			experience: 4,
			languages: ["Python", "SQL"]
		}
	]
}
console.log(employees.employee[0].name);

/* exercise 6 */
console.log('-- exercise 6 --');

function isEmpty(obj){
	for (var key in obj) {
		return true;
	}
	return false;
}

var myObject = {
	test: 100,
	test2: 'test'
}
var myObject2 = {

}

console.log(isEmpty(myObject));
console.log(isEmpty(myObject2));

/* exercise 7 */
console.log('-- exercise 7 --');

function salariesMid(obj){
	var res = 0,
		i = 0;
	for (var key in obj) {
		res += obj[key];
		i++;
	}
	return res/i;
}

var salaries = {
   Cris: 150,
   Brain: 600,
   John: 300,
   Steve: 400,
   Bill: 50,
};

console.log(salariesMid(salaries));
