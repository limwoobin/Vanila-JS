function Person(name , first , second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.test = 'hi';
Person.prototype.protoTest = 'prototype';

var p = new Person('drogba' , 10 , 20);
var o = new Person();
console.log(p.__proto__);
console.log(o.__proto__);
p.protoTest = 'PPPP';

console.log(p.name);
console.log(p.protoTest);
console.log(o.protoTest);


console.log(Person.prototype.constructor);
console.log(Person.prototype.__proto__);