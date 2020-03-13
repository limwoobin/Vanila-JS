function PP(name , gender){
    
}

console.log(PP);
console.log(PP.prototype);
console.log(PP.__proto__);

PP.prototype.sayHello = function(){
    console.log('!!!');
}

PP.prototype.sayHello();

var foo = new PP();

foo.sayHello();