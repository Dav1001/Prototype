// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ orinak 1
// // constructor
// function User(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.isAdmin = false;
// 	this.foo = function(){
// 		console.log(this.name + this.age);
// 		// return true
// 	}
// }
// var user1 = new User("Davit", 19);
// user1.foo2 = function(){};


// var user2 = new User('Hayk', 20);



// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.constructor);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   orinak 2
// var o1 = {};
// var o2 = new Object();

// var arr1 = [];
// var arr2 = new Array();

// if(o1 === o2) console.log('true');

// console.log(typeof o1);
// console.log(typeof o2);


// function User(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.isAdmin = false;
// 	this.say = function (w){console.log(w);}
// 	}

// User.prototype.x = 5;

// var u1 = new User('Davit', 19);	
// var u2 = new User('Ashot', 20);

// u1.say('hello');
// u2.say('hello');	




// function User(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.foo = function (){console.log('FOO');}
// }
// // User.prototype.foo = 5;
// User.prototype.x = 5;

// user1 = new User('Davit', 19);

// for (var item in user1) {
// 	if(user1.hasOwnProperty(item))
// 		console.log(item);
// }

// function User(name, age){
// 	this.name = name;
// 	this.age = age;
	
// }

// User.prototype.foo =function(){
// 	return new User(this.name, this.age);
// }
// var user1 = new User('Davit', 19);


var Book = function(title, pubYear, price){
	this.title = title;
	this.pubYear = pubYear;
	this.price = price;
}

var book1 = new Book('Great Gatsby', 1925, '4.29$')
Book.prototype.show = function(title, price){
	console.log(this.title + ' ' + this.price)
}

book1.show();