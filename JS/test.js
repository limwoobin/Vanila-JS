function Person(){

}

Person.prototype.zazi = '5cm';
Person.prototype.size = 'small';


var man1 = new Person();
var man2 = new Person();

console.log(man1.zazi);

console.log(man1.__proto__);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(Person);


var obj = {

}
console.log(obj);
