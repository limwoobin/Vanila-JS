var student = {
    name: 'Lee',
    score: 90
  }
  console.dir(student);
  console.log(student.hasOwnProperty('name')); // true
  console.log(student.__proto__ === Object.prototype); // true
  console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

console.log('----------------------------------')

var student = {
    name:'No',
    score:90
}

console.log(student);
console.log(student.__proto__);
console.log(Object);
console.log(Object.prototype);
console.log(student.__proto__ === Object.prototype); // true

console.log('----------------------------------')

function Per(name){
    this.name = name;
}

console.log(Per);
console.log(Per.__proto__);
console.log(Per.prototype);


console.log(Function);
console.log(Function.prototype);

console.log('----------------------------------')

var person = {
    name : 'Lee',
    gender : 'male',
    hello : function(){
        console.log('Hello' + this.name);
    }
};

console.log(person);
console.log(person.__proto__);
console.log('----------------------------------');
console.log(person.hello);
console.log(person.hello.__proto__);
console.log(person.hello.prototype);
console.log('----------------------------------');

// ~~~ , {} , Function hello , Function , hello {}
console.log(Function);
console.log(Function.__proto__);
console.log(Function.prototype);
console.log('----------------------------------');
console.log(Object);
console.log(Object.__proto__);

console.log('----------------------------------')

function PP(name , gender){
    this.name = name;
    this.gender = gender;
    this.hi = function(){
        console.log('hi' + this.name);
    }
}

var foo = new PP('drogba' , 'male');

console.log(PP.prototype);
console.log(foo.__proto__);

console.log(PP.prototype.__proto__);
console.log(PP.prototype.constructor);
console.log(PP.__proto__);
